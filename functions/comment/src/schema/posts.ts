/* eslint-disable camelcase */

import * as yup from "yup";

export const postSchema = yup
  .object()
  .shape({
    time_diff: yup.string().required(),
    name: yup.string().required(),
    pic: yup.lazy((value) =>
      typeof value === "boolean"
        ? yup.boolean().required()
        : yup.string().required()
    ),
    message: yup.string().required(),
    country: yup.string().nullable(),
    votes: yup
      .object()
      .shape({
        nb: yup.number().required(),
        nbb: yup.number().required(),
      })
      .required(),
  })
  .required();

export type Post = yup.InferType<typeof postSchema>;

export const postsSchema = yup.array().of(postSchema).required();
