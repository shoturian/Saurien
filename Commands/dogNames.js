//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const Discord = require('discord.js');
const NewID = new Discord.Client();
var dogNames = require('dog-names');

exports.run = (NewID, message) => {
    name = dogNames.allRandom()
    message.channel.send(name)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dogNames'
};
