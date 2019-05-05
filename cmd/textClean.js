//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
exports.run = function(Saurien, message, args) {
  if (!message.guild) {
  const warning = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:', 'You can not use the command `textClean` in private messages')
  return message.author.sendEmbed(warning); }
  if (!message.guild.member(Saurien.user).hasPermission("MANAGE_MESSAGES")) {
	const perm = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning :warning:', 'I need to have MANAGE_MESSAGES authority to delete messages.')
    return message.author.sendEmbed(perm);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const info = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Action:', 'Delete a chat')
    .addField('Authorized:', message.author.username)
    .addField('Result:', `Successful`)
    return message.channel.sendEmbed(info);
    console.log("Chat successfully deleted");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'textClean'
};
