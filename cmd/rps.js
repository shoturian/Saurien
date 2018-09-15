//R4dar
//
//by Saurien (aka R4dar) and YalcnK

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

exports.run = function (r4dar, message, args, args2, cmd) {
    const Discord = require('discord.js');
    const token = require("../token.json");
    var guild = message.guild;
    var userInput = args.join(' ').toLowerCase();
    const embed19 = new Discord.RichEmbed()
        .setColor("#f0ffff")
        .setDescription("**Command: **" + `${token.prefix}rps`)
        .addField("**Usage:**", `${token.prefix}rps <rock/paper/scissors>`)
        .addField("**Example:**", `${token.prefix}rps rock`)
    if (args.join(' ') == "" && args2.join(" ") == "") return message.channel.send({ embed: embed19 })
    var computerchoose = getRandomIntInclusive(1, 3)
    var computerfinal = '';
    if (computerchoose === 1) {
        computerfinal = "rock";
    }
    else if (computerchoose === 2) {
        computerfinal = "paper";
    }
    else if (computerchoose === 3) {
        computerfinal = "scissors";
    }
    if ( (userInput === 'Rock' && computerfinal === "Rock") || (userInput === 'rock' && computerfinal === "rock") ) {
        message.channel.send("Draw! " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ((userInput === 'Rock' && computerfinal === "Papper") || (userInput === 'rock' && computerfinal === "paper"))  {
        message.channel.send("**Lose!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ((userInput === 'Rock' && computerfinal === "Scissors") || (userInput === "rock" && computerfinal === "scissors")) {
        message.channel.send("**Win!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ( (userInput === 'Papper' && computerfinal === "Rock") || (userInput === 'papper' && computerfinal === "rock")) {
        message.channel.send("**Win!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ( (userInput === 'Papper' && computerfinal === "Papper") || (userInput === "papper" && computerfinal === "papper") ) {
        message.channel.send("**Draw!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ( (userInput === 'Papper' && computerfinal === "Scissors") || (userInput === "paper" && computerfinal === 'scissors') ) {
        message.channel.send("**Lose** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ( (userInput === 'Scissors' && computerfinal === 'Rock') || (userInput === "scissors" && computerfinal === "rock") ) {
        message.channel.send("*Lose!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ( (userInput === 'Scissors' && computerfinal === 'Papper') || (userInput === "scissors" && computerfinal === "papper") ) {
        message.channel.send("**Win!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if ( (userInput === 'Scissors' && computerfinal === 'Scissors') || (userInput === "scissors" && computerfinal === "scissors")) {
        message.channel.send("**Draw!** " + `Your Choice: ${userInput}. My Choice: ${computerfinal}.`)
    }
    else if (userInput != 'Scissors' || userInput != 'scissors' || userInput != 'Rock' || userInput != 'rock' || userInput != 'Papper' || userInput != 'papper') {
        message.reply(':x: Please select one from Stone, Paper, Scissors options');
    }   
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rps',
};