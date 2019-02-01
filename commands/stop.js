const Discord = require('discord.js')
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, ops) => {

 //----------------------
    let novoice = new Discord.RichEmbed();
    novoice.setColor(0x36393f)
    novoice.setDescription('🚫 You must connect in a voice channel.');
    //----------------------
    let notconnect = new Discord.RichEmbed();
    notconnect.setColor(0x36393f)
    notconnect.setDescription("🚫 There must be music playing to use that!");
    //----------------------
    let nosame = new Discord.RichEmbed();
    nosame.setColor(0x36393f)
    nosame.setDescription("🚫 We're not in the same voice channel");
    //----------------------
    let stopped = new Discord.RichEmbed();
    stopped.setColor(0x36393f)
    stopped.setDescription("🎶 The music has been stopped and the queue has been cleared.")
    .setFooter("I have also left the voice channel")
/*  message.member.guild.createRole({
       name: Music,
       color: "0x0FF00",
       permissions: []
    }).then(function(role)
    {
      message.member.addRole(role)
  }); */

  if (!message.member.voiceChannel) return message.channel.send('🚫 You must connect in a voice channel.')

  if (!message.guild.me.voiceChannel) return message.channel.send("🚫 There must be music playing to use that!")

  if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("🚫 We're not in the same voice channel")

  message.guild.me.voiceChannel.leave();

 

  


 message.channel.send("🎶 The music has been stopped and the queue has been cleared. 🎧")

}

module.exports.help = {
  name: "stop"
}
