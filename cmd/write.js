//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');

exports.run = (Saurien, message, args) => {
  let write = args.slice(0).join(' ');
if (write.length < 1) return message.reply('You need to write something');
  message.delete();
  message.channel.send(write);
  console.log("write Commands Used By" + message.author.username)
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
