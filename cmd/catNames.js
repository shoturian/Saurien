//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const Saurien = new Discord.Client();
var catNames = require('cat-names');

exports.run = (Saurien, message) => {
        name = catNames.random()
        message.channel.send(name)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'catNames'
};
