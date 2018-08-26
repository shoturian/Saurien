//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const reqEvent = (event) => require(`../Console/${event}`);
module.exports = NewID => {
  NewID.on('ready', () => reqEvent('Console Log')(NewID));
  NewID.on('message', reqEvent('Response'));
};
