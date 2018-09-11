//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');

exports.run = (r4dar, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **You must write whom I will throw hammer!**');
    }
    const embed = new Discord.RichEmbed()
      .setTitle("Someone threw hammer")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Throw hammer to "+"**"+member+"**"+" in fight")
      .setImage("https://media.giphy.com/media/3o6gEcURoGKvjYwwyA/giphy.gif");
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'throwHammer'
};
