//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();
var randomstring = require('randomstring');

exports.run = (r4dar, message) => {
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
