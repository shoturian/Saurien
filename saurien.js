//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');
const Saurien = new Discord.Client();
const id = require('./id.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./console/kernel.js')(Saurien);

var prefix = id.prefix;
var devloper = id.devloper;
var release = id.release;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

["command"].forEach(handler => {
    require(`./console/${handler}`)(Saurien)
})

//Reply Fliter
Saurien.on('message', msg => {
  if (msg.content.toLowerCase() === 'hello') {
    msg.reply('**hello**');
  }

  if (msg.content === 'Hello') {
   	msg.reply('hello');
  }

  if (msg.content === 'by') {
   	msg.reply('by');
  }
  
  if (msg.content === 'good by') {
   	msg.reply('by');
  }
  
  if (msg.content === 'saurien bot') {
    msg.reply('I am here');
  }
  
  if (msg.content === 'saurien') {
    msg.reply('I am here');
  }
  });
  
  Saurien.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  return permlvl;
};

Saurien.login(id.saurienID);
