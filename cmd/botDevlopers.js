//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();
const token = require('../token.json');

var dev = token.dev
var predev = token.predev

exports.run = (NewID, message) => {
  if (message.channel.type !== 'dm') {
    const DrectMessage = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(r4dar.user.username, r4dar.user.avatarURL)
    .setDescription(`Devlopers: ${dev} and ${predev}`);
    message.channel.sendEmbed(DrectMessage) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botDevlopers'
};
