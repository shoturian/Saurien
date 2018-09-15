//R4dar
//
//by Saurien (aka R4dar) and YalcnK

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
    return (parseInt(days) > 0 ? days + " Day " : " ") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + " Hour ") + minutes + " Minute " + seconds + " Second "
	
exports.run = function (r4dar, message, params, cmd) {
    const Discord = require('discord.js');
    const token = require("../token.json");
    const release = require("os")
	var dev = token.dev
	var predev = token.predev
    var guild = message.guild;
    const embed = new Discord.RichEmbed()
        .setColor('#7d5bbe')
        .setTitle(r4dar.user.username + " Release: " + token.release + ` Status`)
        .setDescription(r4dar.user.username + ' Active Time' + timeCon(process.uptime()))
        .addField('🏠 Servers', r4dar.guilds.size, true)
        .addField('📄 Channels', r4dar.channels.size, true)
        .addField('🤵 Users', r4dar.users.size, true)
        .addField('🏓 Bot Ping', `${(r4dar.ping).toFixed(0)} ms`, true)       
        .addField(`:construction_worker: Devlopers`, `${dev} and ${predev}`, true)
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
