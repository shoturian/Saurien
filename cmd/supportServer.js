//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');
const token = require('../token.json');
const r4dar = new Discord.Client();
var invite = token.invite

exports.run = (r4dar, message) => {
  if (message.channel.type !== 'dm') {
    const invite = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Check Your DM. :postbox:');
    message.channel.sendEmbed(invite) }
	const invite1 = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Link: ${invite}`);
    return message.author.sendEmbed(invite1)
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
