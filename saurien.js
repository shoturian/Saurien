//Saurien is a easy usage discord bot
//This file updated in 05.06.2020
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

Saurien.commands = new Discord.Collection();
Saurien.aliases = new Discord.Collection();
fs.readdir('./cmd/', (err, files) => {
  if (err) console.error(err);
  log(`Commands Loading ${files.length}`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`${props.help.name}.`);
    Saurien.commands.set(props.help.name, props);
  });
});

Saurien.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      Saurien.commands.delete(command);
      Saurien.aliases.forEach((cmd, alias) => {
        if (cmd === command) Saurien.aliases.delete(alias);
      });
      Saurien.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        Saurien.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

Saurien.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./cmd/${command}`);
      Saurien.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        Saurien.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

Saurien.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      Saurien.commands.delete(command);
      Saurien.aliases.forEach((cmd, alias) => {
        if (cmd === command) Saurien.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

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
