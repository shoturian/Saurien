//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(Saurien, message, args) => {
if(!args[0]) return message.reply('Please enter a word to be translated to ascii');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
			  console.log("ascii Commands Used By" + message.author.username)
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