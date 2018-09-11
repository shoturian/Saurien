//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const reqEvent = (event) => require(`../console/${event}`);
module.exports = r4dar => {
  NewID.on('ready', () => reqEvent('console-log')(NewID));
  NewID.on('message', reqEvent('response'));
  NewID.on('guildMemberAdd', reqEvent('bot-login-message'));
  NewID.on('guildMemberRemove', reqEvent('bot-exit-message'));
};
