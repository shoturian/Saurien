//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(Saurien, message, args) => {
if(!args[0]) return message.reply('Please enter a word to be translated to ascii');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
              message.delete();
           })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ ],
  permLevel: 0
};

exports.help = {
  name: 'ascii'
};