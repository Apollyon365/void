const Discord = require('discord.js')
const DBL = require('dblapi.js')
module.exports.run = async (bot, message, args, ops) => {


  let fetched = ops.active.get(message.guild.id);
let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('There is currently no music playing in the guild!');
  if (!fetched) return message.channel.send('🚫 There must be music playing to use that!');
let sacha = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 We\'re not in the same voice channel.');
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('🚫 We\'re not in the same voice channel.')
let sas = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('I need a number between 0-200');
  if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send('🚫 I need a number between **0-200**');

 
let bla = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription(`Sucessfully set the volume to ${args[0]}`);

     fetched.dispatcher.setVolume(args[0]/100);
message.channel.send(`🎶 Sucessfully set the volume to ${args[0]} 🎧`)
}

module.exports.help = {
  name: "volume"
}
