const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  
  message.delete();
  let noperms = new Discord.RichEmbed()
.setDescription("🚫 Missing Permissions: ``KICK_MEMBERS``")
.setColor(0x36393f);
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(noperms)
    //----------------
    let noperms1 = new Discord.RichEmbed()
  .setDescription("Please Mention a person")
  .setColor(0x36393f);
  //------------------
  let noperms2 = new Discord.RichEmbed()
  .setDescription("I cannot kick this person!")
  .setColor(0x36393f);
  //------------------
  let noperms3 = new Discord.RichEmbed()
  .setDescription("Please put a reason!")
  .setColor(0x36393f);
 //===================
  //------------------
    let botperm = new Discord.RichEmbed();
    botperm.setColor(0x36393f)
    botperm.setDescription("I am missing permissions ``KICK_MEMBERS``");
       let dev = new Discord.RichEmbed();
    dev.setColor(0x36393f)
    dev.setDescription("Dev Detected! Overriding Permissions");
    //----------------------
    if(message.member.hasPermission("KICK_MEMBERS")) {
      //nothing here
    }
   else if (["507408804145528832"].includes(message.author.id))  {
       console.log('dev')
} else {
    return message.channel.send(noperms)
}
  var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
  if (!kickedmember) return message.channnel.send(noperms1) // if there is no kickedmmeber var
  if (!kickedmember.kickable) return message.channel.send(noperms2) // if the member is unkickable
  var kickreasondelete = 11 + kickedmember.user.id.length //sets the length of the kickreasondelete
  var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
  var kickreason = kickreason.join(" ") || "No Reason"; // joins the list kickreason into one line
  if (!kickreason) return message.channel.send(noperms3) // if no reason
  kickedmember.kick(kickreason) //if reason, kick
  
      .catch(error => message.channel.send(botperm)); //if error, display error
    let noperms5 = new Discord.RichEmbed()
  .setDescription(`${kickedmember.user.username} has been kicked!\nReason: **${kickreason}**`)
  .setFooter(`Moderator: ${message.author.username}`)
  .setColor(0x36393f);
  message.channel.send(noperms5); // sends a message saying he was kicked
}
exports.help = {
  name: 'kick',
  description: 'Kicks the desired player',
  usage: 'rkick',
  inHelp: 'yes'
};

exports.conf = {
  aliases: []
};
module.exports.help = {
  name: "kick"
}
