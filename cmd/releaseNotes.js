//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
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
                description: `Bot name changed to "Saurien\nFixed #translate command\nFixed #userInformation command\nMinor changes in #botStatus\nFixed #notice command\n#quiz minor bugs fixed\nMinor changes in #twerk\nSome commands have been deleted because they are out of date"`
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
