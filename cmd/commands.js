//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');
const token = require('../token.json');

var prefix = token.prefix;
var release = token.release;
var botname = token.botname;

exports.run = (r4dar, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(r4dar.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: `${botname} Commands`
            },
			    "thumbnail": {
				 "url": ""
			},
            fields: [
				{
                name: ":book: **Personal Commands**",
				inline: true,
                value: `${prefix}userInformation\n${prefix}survey\n${prefix}appeal\n${prefix}hastebin\n${prefix}randomPassword\n${prefix}serverInfo\n${prefix}translate\n${prefix}yt`
			  },
			  {
				name: ":gear: **Bot Commands**",
				inline: true,
				value: `${prefix}commands\n${prefix}releaseNotes\n${prefix}botStatus\n${prefix}botDevlopers\n${prefix}ping\n${prefix}ourServices\n${prefix}write\n${prefix}notice\n${prefix}supportServer\n**[NEW]** ${prefix}textClean`
			  },
			  {
                name: ":tada: **Fun Commands**",
				inline: true,
                value: `${prefix}dog\n${prefix}dogNames\n${prefix}cat\n${prefix}catNames\n${prefix}ascii\n${prefix}mcAchievement\n${prefix}quiz\n${prefix}punch\n${prefix}rps\n${prefix}run\n${prefix}slap\n${prefix}throwHammer\n${prefix}twerk\n**[NEW]** ${prefix}luckWheel`
              },
              {
                name: "Release",
                value: `v${release}`
              }
            ],
            timestamp: new Date(),
            footer: {
              text: `New Commands Comming Soon`
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
