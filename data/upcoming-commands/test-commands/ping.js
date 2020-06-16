//Saurien is a easy usage discord bot
//This file updated in 16.06.2020
//by Radiaction
//This command is being developed

const Discord = require('discord.js');
const Saurien = new Discord.Client();

exports.run = async function(Saurien, message) {
  let pinging = await message.channel.send("〽️ Pinging")

  pinging.edit({ embed: {
    title: "📶 Ping",
    description: [
      "**Server**: `" + (pinging.createdAt - message.createdAt) + "ms`",
	  "**Your Ping**: `" + (Date.now() - message.createdTimestamp) + "ms`",
      "**API**: `" + Math.round(Saurien.ping) + "ms`",
      "**Uptime**: `" + msToTime(Saurien.uptime) + "`"
    ].join("\n"),
    color: 0xD97634,
    footer: { text: "Requested by " + message.author.tag, icon_url: message.author.displayAvatarURL },
    timestamp: new Date()
  }});
  console.log("ping Commands Used By" + message.author.username)
}

function msToTime(ms){
  days = Math.floor(ms / 86400000); // 24*60*60*1000
  daysms = ms % 86400000; // 24*60*60*1000
  hours = Math.floor(daysms / 3600000); // 60*60*1000
  hoursms = ms % 3600000; // 60*60*1000
  minutes = Math.floor(hoursms / 60000); // 60*1000
  minutesms = ms % 60000; // 60*1000
  sec = Math.floor(minutesms / 1000);

  let str = "";
  if (days) str = str + days + "d";
  if (hours) str = str + hours + "h";
  if (minutes) str = str + minutes + "m";
  if (sec) str = str + sec + "s";

  return str;
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping'
};
