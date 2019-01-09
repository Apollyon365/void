const Discord = require('discord.js')


module.exports.run = async (bot, message, args) => {
  const config = require("../config.json")
let blue = config.blue

  message.delete();
  let noperm = new Discord.RichEmbed()
.setDescription("🚫 Missing Permissions: ``KICK_MEMBERS`")
.setColor(0x36393f);
        let dev = new Discord.RichEmbed();
    dev.setColor(0x36393f)
    dev.setDescription("Dev Detected! Overriding Permissions");
  
    if(message.member.hasPermission("KICK_MEMBERS")) {
      //nothing here
    }
   else if (["507408804145528832"].includes(message.author.id))  {
      console.log('dev')
} else {
    return message.channel.send(noperm)
}
  let whomute = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('Who must I unmute?');
  
  
  var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
  if (!mutedmember) return message.channel.send(whomute) // if there is no kickedmmeber var
  var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
  var mutereason = message.content.substring(mutereasondelete).split(' '); // deletes the first letters until it reaches the reason
  var mutereason = mutereason.join(" ") || "No Reason";// joins the list kickreason into one line
  let muterole = message.guild.roles.find(`name`, "Muted");
  //if no mute role then..
  
   mutedmember.removeRole(muterole)
  let muted = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription(`${mutedmember.user} has been unmuted!`)
  .setFooter(`Moderator: ${message.author.username}`)
  message.channel.send(muted); // sends a message saying he was kicked
  
  /*
 message.channel.send({embed:{description:'Command Out of Order. Try Again Later'}})*/
}
module.exports.help = {
  name: "unmute"
}
