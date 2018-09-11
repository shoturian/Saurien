//R4dar
//
//by Saurien (aka R4dar) and YalcnK

const Discord = require('discord.js');
const quiz = [
  { sc: "What İs The  Most Famous Drink Mark İn The World ?", a: ["cola", "coca cola"] },
  { sc: "What İs The 7th Planet İn The Solar System?", a: ["uranus"] },
  { sc: "What İs The Name Of The Biggest İsland ;n The World?", a: ["greenland", "grönland"] },
  { sc: "What İs The Name Of The Biggest Forest İn The World?", a: ["amazon"] },
  { sc: "What is the name of the biggest ocean in the World?", a: ["pacific ocean", "pacific"] },
  { sc: "How many colors in the rainbow?", a: ["7", "seven"] },
  { sc: "How much sattelite on the Jupiter?", a: ["63", "sixty three"] },
  { sc: "How many layers of the World?", a: ["5", "five"] },
  { sc: "Who is the first person to set food on the Moon?", a: ["neil armstrong", "armstrong"] },
  { sc: "Does the air transmit electricity?", a: ["sometimes"] },
  { sc: "Where is the coldest place in the World?", a: ["antarctica"] },
  { sc: "Where is The Hottest place in The World?", a: ["Etiyopya", "Etiyopya Dallol"] },
  { sc: "Who is the famous physicist who died in 2018?", a: ["stephen hawking", "hawking"] },
  { sc: "Who is the famous Dj who died in 2018?", a: ["avicii", "tim bergling", "bergling"] }
];
const options = {
  max: 1,
  time: 300000,
  errors: ["time"],
};

module.exports.run = async (r4dar, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.sc);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Congratulations: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Correct answer given: \`${winnerMessage.content}\``)
                                 .setFooter(`Asked question: ${item.sc}`)
                                 .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('You dont know the answer')
                                 .setTitle(`Answer: \`${item.a}\``)
                                 .setFooter(`Asked question: ${item.sc}`)
                                })
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'quiz'
};
