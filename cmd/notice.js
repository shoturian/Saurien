//Octopus by R4dar
//
//v2

const Discord = require('discord.js');

exports.run = (r4dar, message, args) => {
	let guild = message.guild
	let notice = guild.channels.find('name', 'announcements');
	if (!duyuru) return message.reply('I can not find the `announcements` channel');
    let r4 = args.slice(0).join(' ');
    if (r4.length < 1) return message.reply('Write your announcement next to the command');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setDescription(`:postal_horn: **Notice ;**\n${r4}`)
    return guild.channels.get(duyuru.id).sendEmbed(embed);
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