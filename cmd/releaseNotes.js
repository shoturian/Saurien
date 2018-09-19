//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();
const token = require('../token.json');

var prefix = token.prefix;
var release = token.release;

exports.run = (r4dar, message) => {
  message.channel.send({embed: {
                author: {
                    name: `R4dar Release ${release} Notes`,
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `General bugs fixed`
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
