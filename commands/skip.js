const Discord = require('discord.js')
module.exports.run = async (bot, message, args, ops) => {
message.delete()
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
