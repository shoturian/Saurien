//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
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
                value: `${prefix}userInformation\n${prefix}survey\n${prefix}appeal\n${prefix}randomPassword\n${prefix}serverInfo\n${prefix}translate\n${prefix}yt\n${prefix}avatar**(NEW)**\n${prefix}speedTest**(NEW)**`
			  },
			  {
				name: ":gear: **Bot Commands**",
				inline: true,
				value: `${prefix}commands\n${prefix}releaseNotes\n${prefix}botStatus\n${prefix}ping\n${prefix}ourServices\n${prefix}write\n${prefix}notice\n${prefix}supportServer\n${prefix}textClean`
			  },
			  {
                name: ":tada: **Fun Commands**",
				inline: true,
                value: `${prefix}dogNames\n${prefix}catNames\n${prefix}ascii\n${prefix}mcAchievement\n${prefix}quiz\n${prefix}punch\n${prefix}slap\n${prefix}twerk\n${prefix}luckWheel\n${prefix}headsorTails**(NEW)**`
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
