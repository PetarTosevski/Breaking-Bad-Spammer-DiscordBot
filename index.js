const {
	Client,
	GatewayIntentBits,
	EmbedBuilder,
	PermissionsBitField,
	Permissions,
	InteractionCollector,
} = require("discord.js");

require("dotenv").config();

const prefix = process.env.PREFIX;

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
	const MarkosDiscordId = 162969507239821312;
	const MyDiscordIt = 174972829308157952;
	if (command === "pali") {
		message.channel.send(`<@162969507239821312> dosta "Rabotish" i pali breaking bad vekje`);
	}

	//Switch
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

	//Spam
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

	//Button
	if (command === "gleame?") {
		const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

		const button = new ActionRowBuilder().addComponents(
			new ButtonBuilder()
				.setCustomId("button")
				.setLabel("Click Here to find out!")
				.setStyle(ButtonStyle.Success)
		);

		const embed = new EmbedBuilder()
			.setColor("DarkGreen")
			.setDescription("Dali Marko ke pushti Breaking Bad?");
		let description = null;

		message.channel.send({ embeds: [embed], components: [button] });

		const collector = message.channel.createMessageComponentCollector();

		let rndNumber = null;
		collector.on("collect", async (i) => {
			let descriptionList = [
				"Da be brat samo kafe da si naprai za 15 min i se pali",
				"Ne brat, mnogu rabota ima denes",
				"Simon brat a TI imash nekad rabota A??????",
				"Nema vreme za breaking bad ama <@140145724787654656>, <@231053093708627968> aj edna brawlche",
				"Ami kakov Breaking Bad be daj sah da igrame",
				"Zasho da gleash serii koa moesh da chitas knigi i da igrash sah",
				"Ke pushti, pomine so voda samo",
			];

			let descList = [0, 1, 2, 3, 4, 5, 6];

			descList.splice(rndNumber, 1);
			let result = Math.floor(Math.random() * descList.length);

			description = descriptionList[descList[result]];
			rndNumber = descList[result];

			const secondEmbed = new EmbedBuilder().setColor("DarkGreen").setDescription(`${description}`);

			await i.update({ embeds: [secondEmbed], components: [button] });
		});
	}
});

client.login(process.env.TOKEN);
