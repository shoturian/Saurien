//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
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
                description: `Unnecessary commands removed\nSome commands fixed"`
              }});
			  console.log("releaseNotes Commands Used By" + message.author.username)
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
