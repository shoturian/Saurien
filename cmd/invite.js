//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');
const id = require('../id.json');
const Saurien = new Discord.Client();

exports.run = (Saurien, message) => {
  if (message.channel.type !== 'dm') {
    const invite = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Check Your DM. :postbox:');
    message.channel.send(invite) }
    console.log("invite Commands Used By" + message.author.username)
	const invite1 = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Link: https://discordapp.com/oauth2/authorize?client_id=${Saurien.user.id}&scope=bot&permissions=8`)
    return message.author.send(invite1)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'invite'
};
