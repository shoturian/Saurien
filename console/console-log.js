//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const token = require('../token.json');

var botname = token.botname;
var release = token.release;
var dev = token.dev;
var predev = token.predev

module.exports = r4dar => {
  r4dar.user.setGame('GAME HERE')
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Activating The Bot!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Activated!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Devloper ${dev} and ${predev}`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${botname} Release ${release} By ${dev} and ${predev}`);
				  
				  
};
