import axios from "axios";
import cheerio from "cheerio";

import { Post, postsSchema } from "../schema/posts";
import { getPositiveRandomInt, getRandomInt } from "../util/numbers";
import { getLocation } from "../util/url";

const getTargetId = async (): Promise<string> => {
  const page = getPositiveRandomInt(100);

  const { data } = await axios.get(getLocation(`/new/${page}`));
  const $ = cheerio.load(data);

  const targets = $("div[data-is-channel='1']").toArray();
  const targetId = $(targets[getRandomInt(targets.length)]).attr("data-id");

  if (!targetId) {
    return getTargetId();
  }

  return targetId;
};

export const getPostByCountry = async (country: string): Promise<Post> => {
  const targetId = await getTargetId();
  const { data } = await axios.post(
    getLocation(`/threads/video-comments/get-posts/top/${targetId}/0/0`),
    "loaded_ids=&load_all=1",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  if (!data) {
    throw new Error("No data");
  }

  if (!data.posts) {
    throw new Error("No posts {1}");
  }

  if (!data.posts.posts) {
    throw new Error("No posts {2}");
  }

  const posts = await postsSchema.validate(Object.values(data.posts.posts));
  if (posts.length === 0) {
    return getPostByCountry(country);
  }

  const brazilianPosts = posts.filter((post) => post.country === country);
  if (brazilianPosts.length === 0) {
    return getPostByCountry(country);
  }

  return brazilianPosts[getRandomInt(brazilianPosts.length)];
};
