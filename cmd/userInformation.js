//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const id = require('../id.json');

exports.run = (Saurien, message, params) => {
    if (message.channel.type !== "group") {
      const Info = new Discord.RichEmbed()
      .setAuthor(Saurien.user.username, Saurien.user.avatarURL)
	  .setColor('#7d5bbe')
      .setTimestamp()
      .addField('Your Name:', message.author.username + '#' + message.author.discriminator)
      .addField('Your ID:', message.author.id)
      .addField('Sign Date:', message.author.createdAt)
      console.log("userInformation Commands Used By" + message.author.username)
      return message.channel.send(Info);
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