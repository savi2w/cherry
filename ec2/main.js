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

client.on(Events.MessageCreate, async (message) => {
  if (message.content === "$x") {
    try {
      const commentImage = await getComment();
      const imageBuffer = Buffer.from(commentImage, "base64");

      const attachment = new AttachmentBuilder(imageBuffer, {
        name: "image.png",
      });

      await message.channel.send({ files: [attachment] });
    } catch (err) {
      console.error(err);

      await message.reply("Alguma coisa deu errado 😔");
    }
  }
});

client.login(process.env.DISCORD_SECRET);
