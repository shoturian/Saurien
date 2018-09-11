//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const token = require("../token.json");
var YouTube = require('youtube-node');
var youTube = new YouTube();
const youtubeKey = token.yt;
youTube.setKey(youtubeKey)
const winston = require('winston')
var logger = new (winston.Logger)({
})
exports.run = function (r4dar, message, args, args2, cmd) {
    const Discord = require('discord.js');
    var guild = message.guild;
    const embed19 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Commands: **" + `${token.prefix}yt`)
        .addField("**Ussage:**", `${token.prefix}yt <Video>`)
        .addField("**Example:**", `${token.prefix}yt R4dar (aka. Saurien))`)
    if (!args.join(' ')) {
        return message.channel.send({ embed: embed19 })
    }
    message.channel.send("Searching. " + args.join(' '))
    message.channel.send("Searching.. " + args.join(' '))
    message.channel.send("Searching... " + args.join(' '))
    youTube.search(args.join(' '), 1, function (error, result) {
        if (error) {
            message.channel.send(error);
        } else {
            let beforeid = "nothing"
            let id = "nothing"
            if (result.items[0].id.kind === "youtube#video") {
                beforeid = "https://www.youtube.com/watch?v="
                id = result.items[0].id.videoId
            } else if (result.items[0].id.kind === "youtube#playlist") {
                beforeid = "https://www.youtube.com/playlist?list="
                id = result.items[0].id.playlistId
            } else if (result.items[0].id.kind === "youtube#channel") {
                beforeid = "https://www.youtube.com/channel/"
                id = result.items[0].id.channelId
            } else {
                return message.channel.send(":x: I Did not see anything about this video")
            }
            message.channel.send(":ok_hand: Your searching video " + beforeid + id)
        }
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yt'
};