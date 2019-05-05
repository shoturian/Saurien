//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const reqEvent = (event) => require(`../console/${event}`);
module.exports = Saurien => {
  Saurien.on('ready', () => reqEvent('console-log')(Saurien));
  Saurien.on('message', reqEvent('response'));
  Saurien.on('guildMemberAdd', reqEvent('bot-login-message'));
  Saurien.on('guildMemberRemove', reqEvent('bot-exit-message'));
};
