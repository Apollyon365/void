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
    needtext.setDescription("🚫 You need to supply a text.");
  
  
  let messages = args.join(" ")
  let messages2 = args.slice(1).join(" ")
   if(args[0] == "embed") {
        if (!messages2) return message.channel.send("🚫 You need to supply a text.")
        let invis = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription(messages2)
     message.channel.send(invis);
       return;
   }
    
  if (!messages) return message.channel.send("🚫 You need to supply a text.")
               
   
     message.channel.send(messages);




        }

        module.exports.help = {
        name: "invis"
    }
