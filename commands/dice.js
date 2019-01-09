const Discord = require("discord.js");
exports.run = async (bot, message, args, level, ops) => {
  message.delete()
  let replies = ["1", "2", "3", "4", "5", "6"];

  let result = Math.floor((Math.random() * replies.length));

  let ballembed = new Discord.RichEmbed()
  .setAuthor("Look! " +  message.author.username)
  .setColor(0x36393f)
  .addField("You Rolled a:", replies[result])

  message.channel.send(ballembed);
}

exports.help = {
  name: "dice",
  inHelp: "yes",
  description: "Role the dice and get a number",
  usage: "rdice"
};
