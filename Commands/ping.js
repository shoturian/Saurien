//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const Discord = require('discord.js');
const NEwID = new Discord.Client();

exports.run = (NewID, message) => {
 message.channel.send({embed: {
		  file:"https://78.media.tumblr.com/be43242341a7be9d50bb2ff8965abf61/tumblr_o1ximcnp1I1qf84u9o1_500.gif",
          color: 0xD97634,
		  description: "**New Bot's current response traffic: **" + NewID.ping + "ms"
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
