//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const Discord = require('discord.js');
const token = require('../token.json');

var prefix = token.prefix;
var release = token.release;
var botname = token.botname;

exports.run = (NewID, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(NewID.commands.keys());
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
                value: `Soon Stay On Track ;)`
			  },
			  {
				name: ":gear: **Bot Commands**",
				inline: true,
				value: `${prefix}commands\n${prefix}releaseNotes\n${prefix}botStatus\n${prefix}botDevlopers`
			  },
			  {
                name: ":tada: **Fun Commands**",
				inline: true,
                value: `Soon Stay On Track ;)`
              },
              {
                name: "Release",
                value: `v${release}`
              }
            ],
            timestamp: new Date(),
            footer: {
              text: `Being Developed`
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
