const dotenv = require("dotenv");

dotenv.config();

const {
  Client,
  Events,
  GatewayIntentBits,
  AttachmentBuilder,
} = require("discord.js");

const { getComment } = require("./comment");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

const _$x = async (message, counter = 0, times = 1) => {
  if (counter === times) return;

  try {
    const commentImage = await getComment();
    const imageBuffer = Buffer.from(commentImage, "base64");

    const attachment = new AttachmentBuilder(imageBuffer, {
      name: "image.png",
    });

    await message.channel.send({ files: [attachment] });

    return _$x(message, counter + 1, times);
  } catch (err) {
    console.error(err);

    return _$x(message, counter, times);
  }
};

client.on(Events.MessageCreate, async (message) => {
  const context = { command: message.content };
  const pattern = /\$x\$[0-9]/g;

  if (message.content === "$x") context.command = "$x$1";
  if (pattern.test(context.command)) {
    await _$x(message, 0, parseInt(context.command.split("$x$")[1]));
  }
});

client.login(process.env.DISCORD_SECRET);
