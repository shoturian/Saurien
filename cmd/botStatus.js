//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

function timeCon(time) {
    time = time * 1000
    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
    days = Math.floor(time / 86400000)
    time -= days * 86400000
    hours = Math.floor(time / 3600000)
    time -= hours * 3600000
    minutes = Math.floor(time / 60000)
    time -= minutes * 60000
    seconds = Math.floor(time / 1000)
    time -= seconds * 1000
    days = days > 9 ? days : "" + days
    hours = hours > 9 ? hours : "" + hours
    minutes = minutes > 9 ? minutes : "" + minutes
    seconds = seconds > 9 ? seconds : "" + seconds
    return (parseInt(days) > 0 ? days + " day " : " ") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + " hours ") + minutes + " minutes " + seconds + " seconds "
};

exports.run = function (Saurien, message, params, cmd) {
    const Discord = require('discord.js');
    const id = require("../id.json");
    const release = require("os")
	var devloper = id.devloper
	var coDevloper = id.coDevloper
    var guild = message.guild;
    const embed = new Discord.RichEmbed()
        .setColor('#7d5bbe')
        .setTitle(Saurien.user.username + " Release: " + id.release + ` Status`)
        .setDescription(Saurien.user.username + ' Active Time' + timeCon(process.uptime()))
        .addField('🏠 Servers', Saurien.guilds.size, true)
        .addField('📄 Channels', Saurien.channels.size, true)
        .addField('🤵 Users', Saurien.users.size, true)
        .addField('🏓 Bot Ping', `${(Saurien.ping).toFixed(0)} ms`, true)       
        .addField(`:construction_worker: Devlopers`, `${devloper}`, true)
		.addField(`:construction_worker: Co Devlopers`, `${coDevloper}`, true)
    message.channel.send({ embed: embed })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botStatus',
};
