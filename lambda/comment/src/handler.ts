import dotenv from "dotenv";

dotenv.config();

import chromium from "@sparticuz/chromium";
import fs from "fs-extra";
import os from "os";
import path from "path";
import puppeteer from "puppeteer-core";
import { v4 } from "uuid";

import * as comment from "./client/comment";
import { getTemplate } from "./template/comment";

export const getComment = async () => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const fileName = path.join(os.tmpdir(), v4() + ".png");
  const page = await browser.newPage();
  const post = await comment.getPostByCountry("BR");

  await page.setContent(getTemplate(post));
  await page.waitForNetworkIdle();

  const element = await page.$("#screenshot");
  if (!element) {
    throw new Error("screenshot element not found");
  }

  await element.screenshot({ path: fileName });
  await browser.close();

  const file = await fs.readFile(fileName);

  return {
    statusCode: 200,
    body: file.toString("base64"),
  };
};
