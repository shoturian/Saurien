//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const r4dar = new Discord.Client();

exports.run = (r4dar, message) => {
 message.channel.send({embed: {
		  file:"https://media.giphy.com/media/3o6oziEt5VUgsuunxS/giphy.gif",
          color: 0xD97634,
		  description: "**:peach: Time to twerk!!**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'twerk'
};
