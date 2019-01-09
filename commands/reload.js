const Discord = require('discord.js');


module.exports.run = async (bot, message, args, ops) => {
let grey = ops.grey
message.delete()
    let NotDev = new Discord.RichEmbed()
    .setColor(grey)
    .setTitle("Reload Command")
    .setDescription("🚫 Devs Can Only Use this Command.")
   .setFooter(`${message.author.username}`, message.author.displayAvatarURL)
  let nocommand = new Discord.RichEmbed();
 nocommand.setColor(0x36393f)
 nocommand.setDescription("Provide a command name to reload.");
 //----------------------
 let nocomm = new Discord.RichEmbed();
 nocomm.setColor(0x36393f)
 nocomm.setDescription("Command doesn\'t exist");

  
  if (!["507408804145528832"].includes(message.author.id)) return message.channel.send(NotDev);
		if (!args || args.size < 1) return message.channel.send(nocommand);
		const commandName = args[0];
		// Check if the command exists and is valid
		if (!bot.commands.has(commandName)) {
			return message.channel.send(nocomm);
		}

 //----------------------
 let reload = new Discord.RichEmbed();
 reload.setColor(0x36393f)
 reload.setDescription(`\*\*Reloaded the command: \`${commandName}.js\` 🔄\*\*`);

		// the path is relative to the *current folder*, so just ./filename.js
		delete require.cache[require.resolve(`./${commandName}.js`)];
		// We also need to delete and reload the command from the bot.commands Enmap
		bot.commands.delete(commandName);
		const props = require(`./${commandName}.js`);
		bot.commands.set(commandName, props);
		message.channel.send(reload)
		//----------------------

 //----------------------

		/*
		msg.channel.send("Begining hack").then(m => {
      setTimeout(() =>{
        m.edit("Downloading data").then(m => {setTimeout(()=> {m.edit("Spamming emails")}, 2000)
        })
      }, 2000)
    })
		*/

	}

module.exports.help = {
    name: "reload"
  }
