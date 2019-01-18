const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete()
    if (message.author.id !== "507408804145528832") return;
    let sv = bot.guilds.get(args[0])
    if (!sv) return message.author.send(`Enter a valid guild id`)
        message.author.send("I got the information for you!")
  let invite = sv.channels.random().createInvite().then(a => message.author.send(a.toString()))
        message.author.send(invite)
    

}
module.exports.help = {
    name: "getinvite"
}
