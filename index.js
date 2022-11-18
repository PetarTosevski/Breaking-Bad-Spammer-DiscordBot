const {
	Client,
	GatewayIntentBits,
	EmbedBuilder,
	PermissionsBitField,
	Permissions,
} = require("discord.js");

require("dotenv").config();

const prefix = "!Marko ";

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on("ready", () => {
	console.log("Bot Online!");

	client.user.setActivity("Marko Pali Breaking Bad!", { type: "DEMANDING" });
});

client.on("messageCreate", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	//const argument = message.content.slice(prefix.length).split(/ +/);

	const command = args.shift().toLowerCase();

	//Message Arrway

	const messageArray = message.content.split(" ");
	const argument = messageArray.slice(1);
	const cmd = messageArray[0];

	//Message
	const m = args.slice(1).join(" ");

	//COMMANDS

	if (command === "pali") {
		message.channel.send('Marko dosta "Rabotish" i pali breaking bad vekje ');
	}

	if (command === "rabotish?") {
		const rndInt = Math.floor(Math.random() * 6) + 1;
		console.log(rndInt);
		switch (rndInt) {
			case 0:
				message.channel.send('"DA"');
				break;

			case 1:
				message.channel.send("Ne");
				break;

			case 2:
				message.channel.send("Ne lmfao");
				break;

			case 3:
				message.channel.send("Koga rabotel marko lol");

				break;
			case 4:
				message.channel.send("CinCout");
				break;

			case 5:
				message.channel.send("Plati mi kirija beeee :@");
				break;

			case 6:
				message.channel.send("Ne znam dali raboti ama znam deka ne mi pali brekaing bad :@@@@@");
				break;
		}
	}

	if (command === "spam") {
		//Member
		const member =
			message.mentions.members.first() ||
			message.guild.members.cache.get(argument[0]) ||
			message.guild.members.cache.find(
				(x) =>
					x.user.username.toLocaleLowerCase() ===
					argument.slice(0).join(" " || x.user.username === argument[0])
			);
		//Message
		const m = args.slice(1).join(" ");
		if (!m) return message.channel.send("Can't spam without message!");

		//Send
		member.send(m);
		message.channel.send(`${member.user.tag} Recieved the following message: *${m}*`);
	}
});

client.login(process.env.TOKEN);
