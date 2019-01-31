const Discord = require('discord.js')

module.exports.run = async (bot, message, args, ops) => {
message.delete()
   let fetched = ops.active.get(message.guild.id);
let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 There must be music playing to use that!');
   if (!fetched) return message.channel.send('🚫 There must be music playing to use that!');
let nosame = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 We\'re not in the same voice channel');
   if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('🚫 We\'re not in the same voice channel')
let paused = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 The music is already paused.');
   if (fetched.dispatcher.paused) return message.channel.send('🚫 The music is already paused.')

   fetched.dispatcher.pause()

   let pausedembed = new Discord.RichEmbed()
   .setDescription(`⏯ ${message.author.username} has paused the music`)
   .setColor(0x36393f)

   message.channel.send(`⏯ ${message.author.username} has paused the music`)


   }



module.exports.help = {
  name: "pause"
}
