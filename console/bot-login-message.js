//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const winston = require('winston')

module.exports = member => {
    let guild = member.guild;


    function getDefaultChannel(guild) {

        if (guild.channels.exists("name", "input-output"))
            return guild.channels.find("name", "input-output");

        return guild.channels
            .filter(c => c.type === "text" &&
                c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
            .sort((a, b) => a.position - b.position ||
                Long.fromString(a.id).sub(Long.fromString(b.id)).toNumber())
            .first();
    }

    if (member.user.bot) {
        getDefaultChannel(member.guild).send(`${member.user} Joined The Server. Welcome To ${guild.name}`)
    }
    else {
        getDefaultChannel(member.guild).send(`${member.user} Joined The Server. Welcome To ${guild.name}`)
    }
}