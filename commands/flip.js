const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  message.delete()
    let grey = ops.grey
  const rolled = Math.floor(Math.random() * 2) + 1;
  let headembed = new Discord.RichEmbed()
  .setAuthor(`Coin Flip`)
  .addField(`Result:`, `<a:Coin:517208980225785916> You flipped: **Heads**! <a:Coin:517208980225785916>`)
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
  .setColor(grey);
  let tailembed = new Discord.RichEmbed()
  .setAuthor(`Coin Flip`)
  .addField(`Result:`, `<a:Coin:517208980225785916> You flipped: **Tails**! <a:Coin:517208980225785916>`)
  .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
  .setColor(grey);
  if (rolled == "1")
  {
    message.channel.send(tailembed);
  }
  if (rolled == "2")
  {
    message.channel.send(headembed);
  }
}

module.exports.help = {
  name: "flip"
}
