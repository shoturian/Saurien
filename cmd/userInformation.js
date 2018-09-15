//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');
const token = require('../token.json');

exports.run = (r4dar, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0xD97634) : (Durum == "offline" ? (0xD97634) : (Durum == "idle" ? (0xD97634) : (Durum == "dnd" ? (0xD97634) : (0xD97634)))))
        var durm = (Durum == "online" ? ("Online") : (Durum == "offline" ? ("Offline") : (Durum == "idle" ? ("Idle") : (Durum == "dnd" ? ("Do Not Bother") : ("Not Found.")))))
      const Info = new Discord.RichEmbed()
      .setAuthor(r4dar.user.username, r4dar.user.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Your Name:', message.author.username + '#' + message.author.discriminator)
      .addField('Your ID:', message.author.id)
      .addField('Sign Date:', message.author.createdAt)
      .addField('Status:', durm)
      .addField('The Game You Played:', message.author.presence.game ? message.author.presence.game.name : 'You Are Not Playing Games')
      .addField('You Are Bot?', message.author.bot ? '\n Yes' : 'No')
      console.log("userInformation Commands Used By" + message.author.username)
      return message.channel.sendEmbed(Info);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'userInformation'
};