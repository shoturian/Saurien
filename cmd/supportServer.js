//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');
const id = require('../id.json');
const Saurien = new Discord.Client();
var invite = id.invite

exports.run = (Saurien, message) => {
  if (message.channel.type !== 'dm') {
    const invite = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Check Your DM. :postbox:');
    message.channel.send(invite) }
	const invite1 = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Link: ${invite}`)
    return message.author.send(invite1)
	console.log("supportServer Commands Used By" + message.author.username);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'supportServer'
};
