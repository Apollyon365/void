const Discord = require("discord.js");


module.exports.run = async (bot, message, args, ops) => {
    

    message.delete()

    let noperm = new Discord.RichEmbed();
    noperm.setColor(0x36393f)
    noperm.setDescription("🚫 You do not have permission for this. ``MANAGE_MESSAGES``");
  
  let dev = new Discord.RichEmbed();
    dev.setColor(0x36393f)
    dev.setDescription("Dev Detected! Overriding Permissions");
  
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      //nothing here
    }
   else if (["507408804145528832"].includes(message.author.id))  {
    console.log('dev')
} else {
    return message.channel.send(noperm)
}

   // if (!message.member.hasPermission("MANAGE_MESSAGES") || !["507408804145528832"].includes(message.author.id)) return message.channel.send(noperm);

      let needtext = new Discord.RichEmbed();
    needtext.setColor(0x36393f)
    needtext.setDescription("You need to supply a text.");
  
  
  let messages = args.join(" ")
  if (!messages) return message.channel.send(needtext)
        const embed = new Discord.RichEmbed();
        embed.setColor(0x36393f)
      
         embed.setDescription(messages);
        
    
     message.channel.send(embed);



        }

        module.exports.help = {
        name: "invis"
    }