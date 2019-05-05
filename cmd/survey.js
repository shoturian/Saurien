//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');


module.exports.run = async (Saurien, message, args) => {
  if (args == 0) return message.channel.send("You must ask a question in order to be able to open a survey.")

  let embed = new Discord.RichEmbed()
  .setTitle(`Survey: ${args}`.split(',').join(' '))
  .setColor("#ffff00")
  .setDescription(`Survey started by ${message.author.username}`);

  return message.channel.send(embed).then(message.delete())

  .then(function (message, str) {
       message.react("✅")
       message.react("⛔")
     }).catch(function() {
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'survey'
};
