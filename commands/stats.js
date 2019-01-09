const Discord = require('discord.js')

exports.run = async (bot, message) => {
  message.delete()
let guildsize = `${bot.guilds.size}`
let membercount = `${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`
let uptime = `${Math.floor(bot.uptime / 86400000)}d ${Math.floor(bot.uptime / 3600000) % 24}h ${Math.floor(bot.uptime / 60000) % 60}m ${Math.floor(bot.uptime / 1000) % 60}s`
let guilds = `\*\*Guilds:\*\* `
let guildize = ` \n\*\*Users:\*\* `
let uptimey = `\n\*\*Uptime: \*\* `
let ramy = `\n\*\*Ram Usage: \*\*`
let ram = process.memoryUsage().heapUsed / 1024 / 1024;
  let ramu = Math.round(ram)

    const embed = new Discord.RichEmbed()
      .setColor(0x36393f)
      .setTitle("__Void's Stats__")
      .setDescription("⚙ General Stats\n ```diff\n" + `- Guilds : ${bot.guilds.size}     \n- Users : ${membercount}     \`\`\`\n` + "📁 Usage\n" + "```diff\n" + `- Ram Usage : ${ramu} mb    \`\`\`\n` + "⏰ Uptime\n```diff\n" + `- Uptime : ${uptime}      \`\`\``)
      .setThumbnail(bot.user.displayAvatarURL)
  
      if (message.content === ">>stats") message.channel.send(embed)
  


if (!["507408804145528832"].includes(message.author.id)) return
  let servers = bot.guilds.map(g => `**${g.name}:** - ${g.id}`).join(`\n`)
  let serverss = new Discord.RichEmbed()
  .setDescription(servers)
  .setTitle("Current Servers")
  .setColor(0x36393f)
  if (message.content === ">>stats servers") message.channel.send(serverss)
  if (message.content === ">>stats Servers") message.channel.send(serverss)
  if (message.content === ">>stats server") message.channel.send(serverss)
  if (message.content === ">>stats Server") message.channel.send(serverss)
  }
  
  exports.help = {
    name: 'stats'
  }
