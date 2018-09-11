//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require("discord.js")
exports.run = (r4dar, message) => {
  const guildArray = r4dar.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`Server name: **${guild.name}** || Number of members : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Our services')
      embed.setDescription(`I am serving **${Octopus.guilds.size}** server in Discord`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ourServices"
};