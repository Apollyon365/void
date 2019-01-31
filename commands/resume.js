const Discord = require('discord.js')


module.exports.run = async (bot, message, args, ops) => {
message.delete()
   let fetched = ops.active.get(message.guild.id);
let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 There must be music playing to use that!');
   if (!fetched) return message.channel.send('🚫 There must be music playing to use that!');
let samecha = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 We\'re not in the same voice channel');
   if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('🚫 We\'re not in the same voice channel')
let paused = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 The music isn\'t paused');
   if (!fetched.dispatcher.paused) return message.channel.send('🚫 The music isn\'t paused')

   fetched.dispatcher.resume();

   let pausedembed = new Discord.RichEmbed()
   .setDescription(`⏯ ${message.author.username} has resumed the music`)
   .setColor(0x36393f)

   message.channel.send(`⏯ ${message.author.username} has resumed the music`)



   }



module.exports.help = {
  name: "resume"
}
