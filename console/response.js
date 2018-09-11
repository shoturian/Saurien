//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const chalk = require('chalk');
const token = require("../token.json");
 const Discord = require('discord.js');
module.exports = message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(token.prefix)) return;
    
    const r4dar = message.client;


    let command = message.content.split(" ")[0];
    command = command.slice(token.prefix.length);
	
	let params = message.content.split(' ').slice(1);
	
    let perms = r4dar.elevation(message);
    
    let args = message.content.split(" ").slice(1);

    let args2 = message.content.split(" ").slice(2);

    let cmd = args.join(' ');
    
    let cmd2 = args2.join(' ');
    var res = cmd.slice(0, 1);
    
    function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/` /g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;

}
    const Discord = require('discord.js');
    try {
        let cmdFile = require(`../cmd/${command}`);
        cmdFile.run(r4dar, message, args, args2, params, perms, token, Discord);

    } catch(error) {
        console.log(`Command is Failed ${command}\n${error.stack}`);
    }
		
};
