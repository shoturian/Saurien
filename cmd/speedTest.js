const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (Saurien, message) => {
  var osType = os.type();

  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
  message.channel.send("Wait a few second.");
    var test = speedTest({maxTime: 5000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
.setColor(0x36393F)
.setTitle('**Finish Test**')
.addField('**Your internet statistics:**', `Download: **${data.speeds.download}**
Upload: **${data.speeds.upload}**
Discord client ping:: **${Saurien.ping}**
Your ping: **${data.server.ping}**
Your os: **${osType}**
Your internet isp: **${data.client.isp}**
Host: **${data.server.host}** (Closest result)
Location: **${data.server.country}**,**${data.client.country}**
Isp location: **${data.server.location}**
Isp Sponsor: **${data.server.sponsor}** (Closest result)`)
  message.channel.send(embed)
});

    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'speedTest',
};
