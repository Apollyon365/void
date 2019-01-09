const Discord = require('discord.js')
//bot.guilds.map ($ => $.name) <- calls the name of the servers its in
module.exports.run = async (bot, message, args) => {
    message.delete()
  let NotDev = new Discord.RichEmbed()
  .setColor(0x36393f)
  .setTitle("Evaluation")
  .setDescription("🚫 Devs Can Only Use this Command.")
 .setFooter(`${message.author.username}`, message.author.displayAvatarURL)


if (!["507408804145528832"].includes(message.author.id)) return message.channel.send(NotDev);

     function clean(text) {
       if (typeof(text) === "string")
         return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
       else
           return text;
    } try {
           let code = args.join(" ");
           if (args.length == 0) return message.channel.send("You need to provide a code!");
           if(args[0].toLowerCase() == "async") code = `(async function(){\n${code.slice(5)}\n})(bot, message, args)`;
           let evaled = await eval(code);
           let rawEvaled = evaled;
           if (typeof evaled !== "string")
             evaled = require("util").inspect(evaled, {
                  "depth": 0
              });
  
    // The Embed for the result of the EVAl
    let EvalResult = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle(`Evaluation`)
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(bot.token, "ಠ_ಠ")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
  
    message.channel.send(EvalResult);
    } catch (err) {
         message.channel.send(`\`Sorry, there was an error:\n\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
  }
  
  
  exports.help = {
      name: 'eval',
      description: 'Should not be in rhelp!',
      usage: 'reval',
      inHelp: 'no'
  };
  
  exports.conf = {
      aliases: []
  };

  module.exports.help = {
    name: "eval"
  }
