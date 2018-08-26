//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

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
}
const winston = require('winston')
var logger = new (winston.Logger)({
})

exports.run = function (NewID, message, params, cmd) {
    const Discord = require('discord.js');
    const token = require("../token.json");
    const release = require("os")
	var dev = token.dev
	var predev = token.predev
    var guild = message.guild;
    const embed = new Discord.RichEmbed()
        .setColor('#7d5bbe')
        .setTitle(NewID.user.username + " Release: " + token.release + ` Status`)
        .setDescription(NewID.user.username + ' Active Time' + timeCon(process.uptime()))
        .addField('🏠 Servers', NewID.guilds.size, true)
        .addField('📄 Channels', NewID.channels.size, true)
        .addField('🤵 Users', NewID.users.size, true)
        .addField('🐏 Ram Usage', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
        .addField('🏓 Bot Ping', `${(NewID.ping).toFixed(0)} ms`, true)
        .addField(`:white_check_mark: Operating System Of The Host Machine`, `${release.platform}`, true)        
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
