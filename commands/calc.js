const Discord = require("discord.js");
const math = require("mathjs");
const DBL = require('dblapi.js');
exports.run = async (bot, message, args, ops) => {
  message.delete()

   const equation = new Discord.RichEmbed()
    .setColor(0x36393f)
   .setDescription("What is your equation?")
           let novote = new Discord.RichEmbed()
 .setColor(0x36393f)
  .setDescription("Woah Woah.. before you can do your homework \n this command is for DBL voters only! \nYou can vote by clicking [here](https://discordbots.org/bot/508122813299818511/vote)")

    const dbltoken = process.env.DBL
  const dbl = new DBL(dbltoken, { webhookPort: 5000, webhookAuth: 'password' });
const voted = await dbl.hasVoted(message.author.id);
  if (voted) {
    if (!args[0]) return message.channel.send(equation) 
  } else {
    message.channel.send(novote)
  }

  
  let resp;
  try {
    resp = math.eval(args.join(' '));
  } catch (e) {
     const vequation = new Discord.RichEmbed()
    .setColor(0x36393f)
   .setDescription("I need a valid equation")
    return message.channel.send(vequation)
  }
    const embed = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setTitle("Calculator")
    .addField(":inbox_tray: Input", `\`\`\`js\n${args.join(' ')}\`\`\``)
    .addField(":outbox_tray: Output", `\`\`\`js\n${resp}\`\`\``)
 message.channel.send(embed)
 
}
module.exports.help = {
  name: "calc"
}
