const Discord = require("discord.js");
const math = require("mathjs");
exports.run = async (bot, message, args, ops) => {
  message.delete()

   const equation = new Discord.RichEmbed()
    .setColor(0x36393f)
   .setDescription("What is your equation?")

  
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
