//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const Discord = require('discord.js');
const NewID = new Discord.Client();
const token = require('../token.json');

var prefix = token.prefix;
var release = token.release;

exports.run = (NewID, message) => {
  message.channel.send({embed: {
                author: {
                    name: `New bot Release ${release} Notes`,
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `New 3 Command (${prefix}userInformation, ${prefix}mcAchievement and ${prefix}ascii)`
              }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'releaseNotes'
};
