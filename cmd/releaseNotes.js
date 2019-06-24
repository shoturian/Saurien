//Saurien is a easy usage discord bot
//This file updated in 24.06.2019
//by Radiaction

const Discord = require('discord.js');
const Saurien = new Discord.Client();
const id = require('../id.json');

var prefix = id.prefix;
var release = id.release;

exports.run = (Saurien, message) => {
  message.channel.send({embed: {
                author: {
                    name: `Saurien Release ${release} Notes`,
                    icon_url: ""
                  },
                color: 0xD97634,
                description: `New 3 commands:\n-headsorTails\n-dice\n-speedTest"`
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
