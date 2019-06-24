//Saurien is a easy usage discord bot
//This file updated in 23.06.2019
//by Radiaction

const Discord = require('discord.js');
const fs = require("fs");
exports.run = (Saurien, message, params) => {
var Random = [
':one:',
':two:',
':three:',
':four:',
':five:',
':six:',
];
var roll = Math.floor(Math.random()*Random.length);
const rolll = new Discord.RichEmbed()
.setDescription('Incoming number: ' + `${Random[roll]}`)
.setColor(0x036992)
message.channel.send(rolll)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'dice',
};
