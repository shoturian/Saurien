//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
//by Radiaction

const Discord = require('discord.js');

exports.run = (Saurien, message, args) => {
	let guild = message.guild
	let notice = guild.channels.find('name', 'announcements');
	if (!notice) return message.reply('I can not find the `announcements` channel');
    let error1 = args.slice(0).join(' ');
    if (error1.length < 1) return message.reply('Please write your announcement next to the command');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:postal_horn: **Notice ;**\n${error1}`)
	console.log("notice Commands Used By" + message.author.username)
    return guild.channels.get(notice.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'notice'
};