//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const Discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(NewID, message, args) => {
if(!args[0]) return message.reply('Please Enter A Word To Be Translated');  

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