const Discord = require('discord.js')
const DBL = require('dblapi.js')
module.exports.run = async (bot, message, args, ops) => {
message.delete()
  let novote = new Discord.RichEmbed()
  .setDescription("Sorry you must vote for Void before using this command, this is for Performance Issues\nClick [here](https://discordbots.org/bot/508122813299818511/vote) to vote for Void! Thank you!")
  .setColor(0x36393f)
  .setFooter("P.S if you have voted for Void please wait a few minutes before trying again")
 let user = message.author
const voted = await dbl.hasVoted(user.id);
  if (voted) {
    console.log('voted yo') 
  } else {
    message.channel.send(novote)
  }
  let fetched = ops.active.get(message.guild.id);
let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('There is currently no music playing in the guild!');
  if (!fetched) return message.channel.send(error);
let sacha = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('We\'re not in the same voice channel.');
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(sacha)
let sas = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('I need a number between 0-200');
  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send(sas);

 
let bla = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription(`Sucessfully set the volume to ${args[0]}`);

     fetched.dispatcher.setVolume(args[0]/100);
message.channel.send(bla)
}

module.exports.help = {
  name: "volume"
}
