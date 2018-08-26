//New Bot
//
//Don't Ready For Use

const reqEvent = (event) => require(`../Console/${event}`);
module.exports = NewID => {
  NewID.on('ready', () => reqEvent('Console Log')(NewID));
  NewID.on('message', reqEvent('Response'));
};
