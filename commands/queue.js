const Discord = require("discord.js")
module.exports.run = async (bot, message, args, ops) => {
message.delete()
   let fetched = ops.active.get(message.guild.id);
   let error = new Discord.RichEmbed();
    error.setColor(0x36393f)
    error.setDescription('Queue list is empty.');
    //----------------------



   if (!fetched) return message.channel.send(error)

   let queue = fetched.queue;
   let nowPlaying = queue[0];

   let resp = `__**Currently Playing**__\n**${nowPlaying.songTitle}** -- Requested by: *${nowPlaying.requester}*\n\n__**Queue**__\n`;

   for (var i = 1; i < queue.length; i++) {
     resp += `${i}. **${queue[i].songTitle}** -- Requested by: *${queue[i].requester}*\n`;
   }
    let qsueue = new Discord.RichEmbed();
    qsueue.setColor(0x36393f)
    qsueue.setDescription(resp);
        message.channel.send(qsueue);

   }
module.exports.help = {
  name: "queue"
}
