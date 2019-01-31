const Discord = require('discord.js')
module.exports.run = async (bot, message, args, ops) => {
message.delete()
     let fetched = ops.active.get(message.guild.id);
let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 There must be music playing to use that');
     if (!fetched) return message.channel.send('🚫 There must be music playing to use that!');
  let nosame = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 You are not in the same channel as me.');

     if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send('🚫 You are not in the same channel as me.');
  
let skip = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('⏭ Sucessfully skipped the song!');

       message.channel.send('⏭ Sucessfully skipped the song!');

       return fetched.dispatcher.emit('end');

}
   
module.exports.help = {
  name: "skip"
}
