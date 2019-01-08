const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    //----------------------
    let whoban = new Discord.RichEmbed();
    whoban.setColor(0x36393f)
    whoban.setDescription("Who must I ban?");
    //----------------------
    let noperm = new Discord.RichEmbed();
    noperm.setColor(0x36393f)
    noperm.setDescription("🚫 You do not have permission for this. ``BAN_MEMBERS``");
    //----------------------
    let haveperm = new Discord.RichEmbed();
    haveperm.setColor(0x36393f)
    haveperm.setDescription("I cannot ban this person!");
    //----------------------
    let botperm = new Discord.RichEmbed();
    botperm.setColor(0x36393f)
    botperm.setDescription("I am missing permissions ``BAN_MEMBERS``");
    //----------------------
       let dev = new Discord.RichEmbed();
    dev.setColor(0x36393f)
    dev.setDescription("Dev Detected! Overriding Permissions");
  
    if(message.member.hasPermission("BAN_MEMBERS")) {
      //nothing here
    }
   else if (["507408804145528832"].includes(message.author.id))  {
    console.log('dev')
} else {
    return message.channel.send(noperm)
}
    let bUser = message.guild.member(message.mentions.users.first());
    if (!bUser) return message.channel.send(whoban)
    let breason = args.join(" ").slice(22) || "No Reason";
    let banned = new Discord.RichEmbed();
    banned.setColor(0x36393f)
    banned.setDescription("The ban hammer has spoken!\nUser: __" + bUser + "__\n Reason: **" + breason + "**");
  banned.setFooter(`Moderator: ${message.author.username}`)
   
    if (bUser.hasPermission("KICK_MEMBERS")) return message.channel.send(haveperm);  

  
  
    bUser.ban(breason) //if reason, ban
      .catch(error => message.channel.send(botperm)); //if error, display error
  
    message.channel.send(banned)

    
    
    

}
module.exports.help = {
    name: "ban"
}
