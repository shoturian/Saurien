//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const id = require('../id.json');

exports.run = (Saurien, message, params) => {
    if (message.channel.type !== "group") {
        var Status = message.author.presence.status;
        var stat1 = (Status == "online" ? (0xD97634) : (Status == "offline" ? (0xD97634) : (Status == "idle" ? (0xD97634) : (Status == "dnd" ? (0xD97634) : (0xD97634)))))
        var stat2 = (Status == "online" ? ("Online") : (Status == "offline" ? ("Offline") : (Status == "idle" ? ("Idle") : (Status == "dnd" ? ("Do Not Bother") : ("Not Found.")))))
      const Info = new Discord.RichEmbed()
      .setAuthor(Saurien.user.username, Saurien.user.avatarURL)
      .setColor(stat1)
      .setTimestamp()
      .addField('Your Name:', message.author.username + '#' + message.author.discriminator)
      .addField('Your ID:', message.author.id)
      .addField('Sign Date:', message.author.createdAt)
      .addField('Status:', stat1)
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