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

const _$x = async (message) => {
  try {
    const commentImage = await getComment();
    const imageBuffer = Buffer.from(commentImage, "base64");

    const attachment = new AttachmentBuilder(imageBuffer, {
      name: "image.png",
    });

    await message.channel.send({ files: [attachment] });
  } catch (err) {
    console.error(err);

    return _$x(message);
  }
};

client.on(Events.MessageCreate, async (message) => {
  const context = { command: message.content };
  const pattern = /\$x\$[0-9]/g;

  if (message.content === "$x") context.command = "$x$1";
  if (pattern.test(context.command)) {
    const times = parseInt(context.command.slice(0, 4).split("$x$")[1]);

    await Promise.all(Array.from({ length: times }).map(() => _$x(message)));
  }
});

client.login(process.env.DISCORD_SECRET);
