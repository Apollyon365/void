const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
message.delete()
    let noperm = new Discord.RichEmbed()
.setDescription("🚫 Missing Permissions: ``ADMINISTRATOR``")
.setColor(0x36393f);
  
      let noperm2 = new Discord.RichEmbed()
.setDescription("Please provide a prefix to change server prefix")
.setColor(0x36393f);
      if(message.member.hasPermission("ADMINISTRATOR")) {
      //nothing here
    }
   else if (["507408804145528832"].includes(message.author.id))  {
      console.log('dev')
} else {
    return message.channel.send(noperm)
}


if (!args.join(' ')) return message.channel.send(noperm2)
db.set(`prefix_${message.guild.id}`, args.join(' '))
	.then(i => {
  
          let noperm3 = new Discord.RichEmbed()
.setDescription(`Server Prefix has been changed to ${i}`)
.setColor(0x36393f);
		message.channel.send(noperm3);
	})
}

module.exports.help = {
  name: "setprefix"
}
