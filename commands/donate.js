const Discord = require('discord.js')

module.exports.run = async (bot, message, args, ops) => {
 
let donate = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setTitle("Donation")
    .setDescription("Rules if you want to donate:\n1. You will not get any special perks besides a rank in Void's Support Server.\n2. You will not judge my name.\n 3. A chargeback will result in a blacklist towards Void\n4. Lies about fake donations will result in a blacklist towards Void\n5. You are the coolest person in your class **IF** you donate..\nK now you have read the rules you can donate [here](https://paypal.me/apollyon365)")
   message.channel.send(donate)
   }
module.exports.help = {
  name: "donate"
}
