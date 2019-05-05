//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');

exports.run = (Saurien, message, args) => {
  let write = args.slice(0).join(' ');
if (write.length < 1) return message.reply('You need to write something');
  message.delete();
  message.channel.send(write);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'write'
};
