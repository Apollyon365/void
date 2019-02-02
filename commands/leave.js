const Discord = require('discord.js')
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, ops) => {


  if (!message.member.voiceChannel) return message.channel.send('🚫 You must be in a voice channel to use this.')
  
 message.member.voiceChannel.leave();

  
}

module.exports.help = {
  name: "leave"
}
