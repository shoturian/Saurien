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

module.exports = Saurien => {
  Saurien.user.setActivity('GAME HERE', { type: 'WATCHING' })
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Activating The Bot!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Activated!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${botName} Release ${release} By ${devloper} and Co Devloper ${coDevloper}`);
				  
				  
};
