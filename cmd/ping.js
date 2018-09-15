//R4dar
//
//by Saurien and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();

exports.run = (r4dar, message) => {
 message.channel.send({embed: {
		  file:"https://78.media.tumblr.com/be43242341a7be9d50bb2ff8965abf61/tumblr_o1ximcnp1I1qf84u9o1_500.gif",
          color: 0xD97634,
		  description: "**R4dar's current response traffic: **" + r4dar.ping + "ms" + "\n" + "**Your current response traffic: **" + (new Date().getTime() - message.createdTimestamp) + "ms"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping'
};
