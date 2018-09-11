//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');

exports.run = (r4dar, message, params) => {
	if (!message.guild) {
    const run = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Run! Run! Run!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/67d019794cfe0eafdb86a57daac3acf2/tenor.gif`)
    return message.channel.sendEmbed(run);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'run'
};
