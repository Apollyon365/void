const Discord = require('discord.js')
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, ops) => {


  if (!message.member.voiceChannel) return message.channel.send('🚫 You must connect in a voice channel.')
  
 message.member.voiceChannel.join();

  
}

module.exports.help = {
  name: "join"
}
