
const Discord = require("discord.js")
module.exports.run = async (bot, message, args, ops) => {

let google = args.slice(0).join('+');

let link = `https://www.google.com/search?q=` + google;
if(!link)return message.reply("Console error")
let embed = new Discord.RichEmbed()

.setColor(ops.grey)
.setDescription("<:vgoogleLogo:517208982293839872>")
.addField('Action:', 'Searching on Google 🔍')
.addField("Search Term:", `${args.slice(0).join(' ')}`)
.addField('Link:', `[Click Here](${link})`)
.setFooter(`${message.author.username}`, message.author.displayAvatarURL)
  
message.channel.send(embed);

}

module.exports.help = {
name: "google"
}
