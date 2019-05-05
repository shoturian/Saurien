//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

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
        getDefaultChannel(member.guild).send(`${member.user} Exited From The Server :wave:`)
    }
    else {
        getDefaultChannel(member.guild).send(`${member.user} Exited From The Server :wave:`);

    }

}

