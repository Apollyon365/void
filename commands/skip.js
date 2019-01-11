const Discord = require('discord.js')
const DBL = require('dblapi.js')
module.exports.run = async (bot, message, args, ops) => {
message.delete()
  let novote = Discord.RichEmbed()
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
  let nosame = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('You are not in the same channel as me.');

     if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(nosame);
  
let skip = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('Sucessfully skipped the song!');

       message.channel.send(skip);

       return fetched.dispatcher.emit('end');

}
   
module.exports.help = {
  name: "skip"
}
