//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');

exports.run = (r4dar, message, args) => {
  let message = args.slice(0).join(' ');
if (message.length < 1) return message.reply('You need to write something');
  message.delete();
  message.channel.send(message);
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
