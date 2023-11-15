const { LambdaClient, InvokeCommand } = require("@aws-sdk/client-lambda");

const lambdaClient = new LambdaClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  region: process.env.AWS_REGION,
});

const getComment = async (attempts = 0) => {
  if (attempts >= 10) throw new Error("Max attempts exceeded");

  try {
    const params = {
      FunctionName: "cherry-comment",
      Payload: Buffer.from(JSON.stringify({})),
    };

    const command = new InvokeCommand(params);
    const response = await lambdaClient.send(command);

    return JSON.parse(new TextDecoder("utf-8").decode(response.Payload)).body;
  } catch (error) {
    return getComment(attempts + 1);
  }
};

module.exports.getComment = getComment;
