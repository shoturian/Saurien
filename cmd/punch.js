//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');

exports.run = (r4dar, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **You must write whom I will punch**');
    }
    var punch = new Discord.RichEmbed()
      .setTitle("Someone Punched")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Punched the "+"**"+member+"**")
      .setImage("https://media.giphy.com/media/utNbq8hMRng7S/giphy.gif");

    message.channel.sendEmbed(punch);
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch'
};
