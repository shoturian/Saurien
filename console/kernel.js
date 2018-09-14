//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const reqEvent = (event) => require(`../console/${event}`);
module.exports = r4dar => {
  r4dar.on('ready', () => reqEvent('console-log')(r4dar));
  r4dar.on('message', reqEvent('response'));
  r4dar.on('guildMemberAdd', reqEvent('bot-login-message'));
  r4dar.on('guildMemberRemove', reqEvent('bot-exit-message'));
};
