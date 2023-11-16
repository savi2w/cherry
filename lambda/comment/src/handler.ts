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
  await chromium.font(
    "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
  );

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
  });

  const fileName = path.join(os.tmpdir(), v4() + ".png");
  const page = await browser.newPage();
  const resp = await comment.getPostByCountry("BR");

  await page.setContent(getTemplate(resp.post));
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
    body: JSON.stringify({
      file: file.toString("base64"),
      targetId: resp.targetId,
    }),
  };
};
