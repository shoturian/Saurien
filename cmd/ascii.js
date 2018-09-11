//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(r4dar, message, args) => {
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