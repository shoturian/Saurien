//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const Saurien = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (saurien, message) => {
     message.channel.send(
            randomstring.generate({
            length: 12,
            charset: 'alphabetic'
}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'randomPassword'
};
