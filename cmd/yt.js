//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const id = require("../id.json");
var YouTube = require('youtube-node');
var youTube = new YouTube();
const youtubeKey = id.yt;
youTube.setKey(youtubeKey)

exports.run = function (Saurien, message, args, args2, cmd) {
    const Discord = require('discord.js');
    var guild = message.guild;
    const embed19 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Commands: **" + `${id.prefix}yt`)
        .addField("**Ussage:**", `${id.prefix}yt <Video>`)
        .addField("**Example:**", `${id.prefix}yt Radiaction`)
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