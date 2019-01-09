const Discord = require('discord.js')
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, ops) => {
  message.delete()
 //----------------------
    let novoice = new Discord.RichEmbed();
    novoice.setColor(0x36393f)
    novoice.setDescription('Connect to a voice channel.');
    //----------------------
    let notconnect = new Discord.RichEmbed();
    notconnect.setColor(0x36393f)
    notconnect.setDescription("I am currently not connected to the voice channel.");
    //----------------------
    let nosame = new Discord.RichEmbed();
    nosame.setColor(0x36393f)
    nosame.setDescription("We're not in the same voice channel");
    //----------------------
    let stopped = new Discord.RichEmbed();
    stopped.setColor(0x36393f)
    stopped.setDescription("Music has been stopped, and I have cleared the queue")
    .setFooter("I have also left the voice channel")
/*  message.member.guild.createRole({
       name: Music,
       color: "0x0FF00",
       permissions: []
    }).then(function(role)
    {
      message.member.addRole(role)
  }); */

  if (!message.member.voiceChannel) return message.channel.send(novoice)

  if (!message.guild.me.voiceChannel) return message.channel.send(notconnect)

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(nosame)

  message.guild.me.voiceChannel.leave();

  message.delete();

  


 message.channel.send(stopped)

}

module.exports.help = {
  name: "stop"
}
