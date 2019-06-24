//Saurien is a easy usage discord bot
//This file updated in 23.06.2019
//by Radiaction

const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const module2 = [
	"**Tails**",
	"**Heads**"
];

exports.run = function(Saurien, message) {

	var module1 = module2[Math.floor(Math.random() * module2.length)];

	if (module1 === "**Heads**") {

		 const embed1 = new Discord.RichEmbed()
		.setColor(0xf4b942)
        .setDescription("**Heads**")
		message.channel.send(embed1);

	} else if (module1 === "**Tails**") {

		const embed2 = new Discord.RichEmbed()
		.setColor(0xf4b942)
		.setDescription("**Tails**")
		message.channel.send(embed2);

	}


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'headsorTails',
};
