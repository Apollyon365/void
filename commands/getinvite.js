const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete()
    if (message.author.id !== "507408804145528832") return message.channel.send("Sorry, only my master can use this!");
    let sv = bot.guilds.get(args[0])
    if (!sv) return message.channel.send(`Enter a valid guild id`)
        message.reply("got the information for you! Check your DMs...")
  let invite = sv.channels.random().createInvite().then(a => message.author.send(a.toString()))
        var owner = new Discord.RichEmbed()
        message.author.send(invite)
             .setAuthor(bot.guilds.get(args[0]).name, bot.guilds.get(args[0]).iconURL)
             .setThumbnail(bot.guilds.get(args[0]).iconURL)
             .addField("Server Name", bot.guilds.get(args[0]).name, true)
             .addField("Server ID", args[0], true)
             .addField("Server Member Count", bot.guilds.get(args[0]).memberCount + " Members", true)
             .addField("Server Owner", "**Name: **" + bot.guilds.get(args[0]).owner + "\n **ID:** " + bot.guilds.get(args[0]).ownerID, true)
             .addField("Server Region", bot.guilds.get(args[0]).region , true)
      .addField("Invite Link", invite, true)
        .setColor(0x36393f)
    message.author.send(owner);
    

}
module.exports.help = {
    name: "getinvite"
}
