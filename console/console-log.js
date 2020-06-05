//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const id = require('../id.json');

var botName = id.botName;
var release = id.release;
var devloper = id.devloper;
var coDevloper = id.coDevloper
var activity = id.activity

module.exports = Saurien => {
    console.log(`\u001b[31m`, `------------[ ${botName} | ${devloper} ]------------`)
    console.log(`\u001b[32 m`, `[${botName}] Stats | ${Saurien.users.size} users, ${Saurien.channels.size} channels`)
    console.log(`\u001b[32 m`, `[${botName}] Invite | https://discordapp.com/oauth2/authorize?client_id=${Saurien.user.id}&scope=bot&permissions=8`)
    console.log(`\u001b[32 m`, `[${botName}] ${botName} connected to the api and is online!`)
    console.log(`\u001b[31m`, `------------[ ${botName} | ${devloper} ]------------`)
    Saurien.user.setActivity(`${activity}`, {
        type: "LISTENING"			  
    })  
};
