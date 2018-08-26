//New Bot 
//
//Don't Ready For Use

const Discord = require('discord.js');
const NewID = new Discord.Client();
const token = require('./token.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./Console/Kernel.js')(NewID);

var prefix = token.prefix;
var dev = token.dev;
var release = token.release;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

NewID.commands = new Discord.Collection();
NewID.aliases = new Discord.Collection();
fs.readdir('./Commands/', (err, files) => {
  if (err) console.error(err);
  log(`Commands Loading ${files.length}`);
  files.forEach(f => {
    let props = require(`./Commands/${f}`);
    log(`${props.help.name}.`);
    NewID.commands.set(props.help.name, props);
  });
});

NewID.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./Commands/${command}`)];
      let cmd = require(`./Commands/${command}`);
      NewID.commands.delete(command);
      NewID.aliases.forEach((cmd, alias) => {
        if (cmd === command) NewID.aliases.delete(alias);
      });
      NewID.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        NewID.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

NewID.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./Commands/${command}`);
      NewID.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        NewID.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

NewID.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./Commands/${command}`)];
      let cmd = require(`./Commands/${command}`);
      NewID.commands.delete(command);
      NewID.aliases.forEach((cmd, alias) => {
        if (cmd === command) NewID.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

function NewIdGameAndStatus() {
  let status = [
    ` New Bot Dont Ready For Use ` // New Bot Game
    ];
    let NewIdGameAndStatus1 = Math.floor(Math.random() * status.length);

    NewID.user.setActivity(status[NewIdGameAndStatus1], {type: "WATCHING"}); // New Bot Status
    }; setInterval(NewIdGameAndStatus, 5600)

//Reply Fliter
NewID.on('message', msg => {
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
  
  if (msg.content === 'new bot') {
    msg.reply('I Am Here');
  }
  });

NewID.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === token.ownerıd) permlvl = 4;
  return permlvl;
};

NewID.login(token.token);
