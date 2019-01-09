const Discord = require("discord.js");

exports.run = (bot, message, args, ops) => {

             let NotDev = new Discord.RichEmbed()
  .setColor(0x36393f)
  .setTitle("Bot Leave")
  .setDescription("Devs Can Only Use this Command.")
 .setFooter(`${message.author.username}`, message.author.displayAvatarURL)


if (!["507408804145528832"].includes(message.author.id)) return message.channel.send(NotDev);
         let reason = args.join(" ").slice(19) || "No Reason";
        let id = args[0]
                     let noid = new Discord.RichEmbed()
  .setColor(0x36393f)
  .setDescription("You need to supply an ID")
        if (!id) return message.channel.send(noid)
         var error17 = new Discord.RichEmbed()
             .setTitle("ID Not Valid")
             .setDescription("The server id is not valid")
             .setColor(0x36393f)
         
let guildname = bot.guilds.get(id).name

         var removed = new Discord.RichEmbed()
             .setTitle("The Bot Was Removed Successfully!")
             .addField("Guilds Name", guildname, true)
             .addField("Guilds ID", id, true)
             .addField("Guild Owner", "**Name:** " + bot.guilds.get(id).owner + "\n **ID:** " + bot.guilds.get(id).ownerID, true)
             .addField("Reason for removal", reason)
             .setColor(0x36393f)
         
                  var removedw = new Discord.RichEmbed()
                  .setTitle(`Void has been removed from ${guildname}`)
             .setDescription("Dear " + bot.guilds.get(id).owner + ", " + "Void has been removed from your server because: \n" + reason)
             .setColor(0x36393f)
             

         if (isNaN(id)) return message.channel.send(error17).then(msg => {
             msg.delete(9000)
         });

	
		message.channel.send(removed);
  bot.guilds.get(id).owner.send(removedw)
         //If tried kick bot from a main server (like for emote provider) will return error18
         //if (args[0] !== 373950345153609729 || 481663437705838602) return message.channel.send(error18).then(msg => {
         //    msg.delete(9000)
         //});
  bot.guilds.get(id).leave();
}

module.exports.help = {
	name: "botleave"
}
