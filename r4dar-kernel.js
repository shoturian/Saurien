//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();
const token = require('./token.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./console/kernel.js')(r4dar);

var prefix = token.prefix;
var dev = token.dev;
var release = token.release;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

r4dar.commands = new Discord.Collection();
r4dar.aliases = new Discord.Collection();
fs.readdir('./cmd/', (err, files) => {
  if (err) console.error(err);
  log(`Commands Loading ${files.length}`);
  files.forEach(f => {
    let props = require(`./cmd/${f}`);
    log(`${props.help.name}.`);
    r4dar.commands.set(props.help.name, props);
  });
});

r4dar.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      r4dar.commands.delete(command);
      r4dar.aliases.forEach((cmd, alias) => {
        if (cmd === command) r4dar.aliases.delete(alias);
      });
      r4dar.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        r4dar.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

r4dar.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./cmd/${command}`);
      r4dar.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        r4dar.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

r4dar.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./cmd/${command}`)];
      let cmd = require(`./cmd/${command}`);
      r4dar.commands.delete(command);
      r4dar.aliases.forEach((cmd, alias) => {
        if (cmd === command) r4dar.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

function GameStatus() {
  let status = [
    ` Komut Sayfası İçin ${prefix}yardım. `,
    ` Sürümüm: ${surum}. `,
    ` ${surum} Yeniliklerine Bakmak İçin ${prefix}sürümNotları. `,
    ` ${Octopus.guilds.size} Sunucuya Hizmet Vermekteyim `,
    ` Geliştiricim ${ad} `,
    ` Hataya Rastlarsanız ${prefix}hataRaporla `,
    ` Önerileriniz İçin ${prefix}öner `,
    ` ${Octopus.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıya Hizmet Vermekteyim. ` // Octopus Oyunu
    ];
    let Test = Math.floor(Math.random() * status.length);

    r4dar.user.setActivity(status[Test]); // Octopus Durumu
    }; setInterval(GameStatus, 5600)

//Reply Fliter
r4dar.on('message', msg => {
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
  
  if (msg.content === 'r4dar bot') {
    msg.reply('I Am Here');
  }
  
  if (msg.content === 'r4dar') {
    msg.reply('I Am Here');
  }
  });

r4dar.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === token.ownerıd) permlvl = 4;
  return permlvl;
};

r4dar.login(token.token);
