//To check the dblapi
const DBL = require('dblapi.js');
let Discord = require('discord.js')

module.exports.run = async (bot, message, args, ops) => {
 /* message.delete()
  const dbltoken = process.env.DBL
  const dbl = new DBL(dbltoken, { webhookPort: 5000, webhookAuth: 'password' });
  
  let novote = new Discord.RichEmbed()
 .setColor(0x36393f)
  .setDescription("You have not voted!\n Please vote by clicking [here](https://discordbots.org/bot/508122813299818511/vote)")
  
  let yesvote = new Discord.RichEmbed()
  .setColor(0x36393f)
  .setDescription("You have voted! Thank you for supporting Void! Heres a cookie.. :cookie:")
  
  let user = message.author
const voted = await dbl.hasVoted(user.id);
  if (voted) {
    message.channel.send(yesvote) 
  } else {
    message.channel.send(novote)
  }
  /* let idk = new Discord.RichEmbed()
 .setColor(0x36393f)
  .setDescription("Want to suport Void?\nPlease Vote by clicking [here](https://discordbots.org/bot/508122813299818511/vote)")
  .setFooter(`Heres a cookie :cookie:`)
  message.channel.send(idk)*/
 */ 
}
module.exports.help = {
  name: "vote"
}
