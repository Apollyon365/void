const Discord = require('discord.js')


module.exports.run = async (bot, message, args, ops) => {
message.delete()
   let fetched = ops.active.get(message.guild.id);
let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('There is currently no music playing in the guild!');
   if (!fetched) return message.channel.send(error);
let samecha = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('We\'re not in the same voice channel');
   if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(samecha)
let paused = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('The music isn\'t paused');
   if (!fetched.dispatcher.paused) return message.channel.send(paused)

   fetched.dispatcher.resume();

   let pausedembed = new Discord.RichEmbed()
   .setDescription(`${message.author.username} has resumed the music`)
   .setColor(0x36393f)

   message.channel.send(pausedembed)



   }



module.exports.help = {
  name: "resume"
}
