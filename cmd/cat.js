//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();
var gis = require('g-image-search');

exports.run = (r4dar, message) => {
  sb = message.content.substring(5)
         message.channel.send("**Looking For The Cat...**").then((msg) =>
				gis('cat').then(function logResults(results) {
					results = results.slice(0, 20)
					img = results[Math.floor(Math.random() * results.length)]
					if (img === undefined) {
						msg.edit("```İ Did Not Find Anything```")
						return
					}
					msg.edit(img)
				}).catch(function(err) {
					console.log(err);
					msg.edit("```İ Did Not Find Anything```")
				}));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'cat',
};
