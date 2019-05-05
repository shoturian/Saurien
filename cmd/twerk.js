//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const Saurien = new Discord.Client();

exports.run = (Saurien, message) => {
 message.channel.send({embed: {
		  file:"https://media2.giphy.com/media/9rU2rP52gAJEY/giphy.gif?cid=790b76115ccf48ef68556a70414cba72&rid=giphy.gif",
          color: 0xD97634,
		  description: "**:peach: Time to twerk!!**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twerk'
};
