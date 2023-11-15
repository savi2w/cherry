export const getLocation = (path: string) => {
  if (!process.env.SERVICE_URL) {
    throw new Error("`SERVICE_URL` is not defined");
  }

  return process.env.SERVICE_URL + path;
};
