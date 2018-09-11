//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();
var catNames = require('cat-names');

exports.run = (r4dar, message) => {
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
