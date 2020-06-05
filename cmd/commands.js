//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');
const id = require('../id.json');

var prefix = id.prefix;
var release = id.release;
var botName = id.botName;

exports.run = (Saurien, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(Saurien.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: `${botName} Commands`
            },
			    "thumbnail": {
				 "url": ""
			},
            fields: [
				{
                name: ":book: **Personal Commands**",
				inline: true,
                value: `${prefix}userInformation\n${prefix}survey\n${prefix}randomPassword\n${prefix}serverInfo\n${prefix}avatar\n${prefix}speedTest`
			  },
			  {
				name: ":gear: **Bot Commands**",
				inline: true,
				value: `${prefix}commands\n${prefix}releaseNotes\n${prefix}botStatus\n${prefix}ping\n${prefix}ourServices\n${prefix}write\n${prefix}notice\n${prefix}supportServer`
			  },
			  {
                name: ":tada: **Fun Commands**",
				inline: true,
                value: `${prefix}ascii\n${prefix}punch** (New punch gif added)**\n${prefix}slap\n${prefix}twerk\n${prefix}luckWheel\n${prefix}headsorTails`
              },
              {
                name: "Release",
                value: `v${release}`
              }
            ],
            timestamp: new Date(),
            footer: {
              text: `New command page soon.`
            }
          }
        });
	    message.react("👍")
			console.log("commands Commands Used By" + message.author.username)
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'commands'
};
