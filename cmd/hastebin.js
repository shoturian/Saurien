//R4dar
//
//by Saurien and YalcnK

const hastebin = require('hastebin-gen');

exports.run = (r4dar, msg, args) => {
	    let haste = args.slice(0).join(" ")
        let type = args.slice(1).join(" ")
        if (!args[0]) { return msg.channel.send(":x: You should type a code or a word next to the command") }
        hastebin(haste, type).then(r => {
            msg.channel.send(":white_check_mark: Your hastebin link: " + r);
        }).catch(console.error);
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hastebin'
};