const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  message.delete();
  //----------------------
  let number = new Discord.RichEmbed();
  number.setColor(0x36393f)
  number.setDescription("🚫 You need to input a number between 1 and 99.");
  //----------------------
  let noperm = new Discord.RichEmbed();
  noperm.setColor(0x36393f)
  noperm.setDescription("🚫 You do not have permission for this. ``MANAGE_MESSAGES``");
  //----------------------
  let notvalidnumber = new Discord.RichEmbed();
  notvalidnumber.setColor(0x36393f)
  notvalidnumber.setDescription("🚫 Please input a valid number");
  //----------------------
  let err = new Discord.RichEmbed();
  err.setColor(0x36393f)
  err.setDescription("🚫 There was an error trying to clear the messages in this channel!");
  //----------------------
  let cleared = new Discord.RichEmbed();
  cleared.setColor(0x36393f)
  cleared.setDescription(`✅ Successfully Cleared **${args[0]}** messages.`);
  //----------------------
        let dev = new Discord.RichEmbed();
    dev.setColor(0x36393f)
    dev.setDescription("Dev Detected! Overriding Permissions");
    //----------------------
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      //nothing here
    }
   else if (["507408804145528832"].includes(message.author.id))  {
    console.log('yay apolly')
} else {
    return message.channel.send(noperm)
}

  const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.channel.send(notvalidnumber)
		}
		else if (amount <= 1 || amount > 101) {
      return message.channel.send(number)
      
    }
    
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`✅ Successfully Cleared **${args[0]}** messages.`).then(msg => {msg.delete(5000)});
    });

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send(err)
		});


  /*const reportschannel = message.guild.channels.find(`name`, "bot-logs");
  if(!reportschannel) return;

   

  message.channel.send(report)*/
  }

module.exports.help = {
  name: "clear"
}
