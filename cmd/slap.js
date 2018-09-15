//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');

exports.run = (r4dar, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **You must write whom I will slap**');
    }
    var slap = new Discord.RichEmbed()
      .setTitle("Someone slaped")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Slapped the "+"**"+member+"**")
      .setImage("https://media.giphy.com/media/IYcXTDme1ZPMI/giphy.gif");

    message.channel.sendEmbed(slap);
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slap'
};