const ms = require("ms");
const Discord = require("discord.js")

module.exports.run = async (bot, message, args, ops) => {

 message.delete()
 //----------------------
 let time = new Discord.RichEmbed();
 time.setColor(0x36393f)
 time.setDescription('When shall I remind you?')
  .setFooter("Ex: >>remind 10s <reminder>")
 //----------------------
 let noreminder = new Discord.RichEmbed();
 noreminder.setColor(0x36393f)
 noreminder.setDescription("What shall I remind you about?")
  .setFooter("Ex: >>remind 10s Void is lit")
 //----------------------


 
    let reminderTime = args[0];
    if (!reminderTime) return message.channel.send(time);
  
 let remind = new Discord.RichEmbed();
 remind.setColor(0x36393f)
  .setTitle(`Reminder Set!`)
 remind.setDescription(`I will remind you in ${reminderTime}`)
  .setFooter(`${message.author.username}`)
  
//----------------------
    let reminder = args.slice(1).join(" ");
    if (!reminder) return message.channel.send(noreminder)

    let whoban = new Discord.RichEmbed();
 whoban.setColor(0x36393f)
  .setTitle(`${message.author.username}`)
  .setTitle("⏰")
 whoban.setDescription(`"${reminder}"`)
  .setFooter("Your reminder that you set for ${reminderTime} went off.")

    message.channel.send(remind);


    setTimeout(function() {

        message.member.send(whoban);
    }, ms(reminderTime));

}

  module.exports.help = {
    name: "remind"
  }
