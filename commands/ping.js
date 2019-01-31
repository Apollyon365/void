const Discord = require("discord.js");


module.exports.run = async (bot, message, args, ops) => {
  let grey = ops.grey
  let pong = new Discord.RichEmbed()
 
  .setDescription("🏓 Pong! \n ```diff\n" + `${Math.round(bot.ping)}ms` + `\`\`\``)
  .setColor(grey)
  
   message.channel.send(pong);        
     
   
}

exports.help = {
  name: 'ping',
  description: 'Shows the ping of the bot!',
  usage: 'rping',
  inHelp: 'yes'
};

exports.conf = {
  aliases: []
};
module.exports.help = {
name: "ping"
}
