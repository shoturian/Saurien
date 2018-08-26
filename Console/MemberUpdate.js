//New Bot
//
//by Saurien (aka R4dar) and CpryX Team & YalcnK

const ddiff = require('return-deep-diff');
module.exports = (oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
};
