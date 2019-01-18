const Discord = require('discord.js')
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, ops) => {
  message.delete()
  let novoice = new Discord.RichEmbed();
    novoice.setColor(0x36393f)
    novoice.setDescription('Connect to a voice channel.');
  if (!message.member.voiceChannel) return message.channel.send(novoice)
  let novodice = new Discord.RichEmbed();
    novodice.setColor(0x36393f)
    novodice.setDescription('I need a valid url.');
  if (!args[0]) return message.channel.send(novodice)

  let validate = await ytdl.validateURL(args[0]);

  if (!validate) {
    let commandFile = require(`./search.js`);
    return commandFile.run(bot, message, args, ops);
  }

  let info = await ytdl.getInfo(args[0]);

  let data = ops.active.get(message.guild.id) || {};

  if (!data.connection) data.connection = await message.member.voiceChannel.join();
  if (!data.queue) data.queue = [];
  data.guildID = message.guild.id;

  data.queue.push({
    songTitle: info.title,
    requester: message.author.tag,
    url: args[0],
    announceChannel: message.channel.id
  });

  if (!data.dispatcher) play(bot, ops, data);
  else {

      let queueembed = new Discord.RichEmbed()
      .addField(`Added to the Queue`, `${info.title} to the Queue`)
      .addField(`Link`, `Click [here](https://youtu.be/${data.queue[0].url})`)
      .setFooter(`Requested by: ${message.author.username}`)
      .setColor(0x36393f)

      message.channel.send(queueembed)

  }

   ops.active.set(message.guild.id, data);


}

async function play(bot, ops, data) {
   let playingembed = new Discord.RichEmbed()
   .addField(`Now Playing`, `${data.queue[0].songTitle}`)
   .addField(`Link`, `Click [here](https://youtu.be/${data.queue[0].url})`)
   .setFooter(`Requested by: ${data.queue[0].requester}`)
   .setColor(0x36393f)

   bot.channels.get(data.queue[0].announceChannel).send(playingembed)

   data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: 'audioonly' }));
   data.dispatcher.guildID = data.guildID;

   data.dispatcher.once('end', function() {

     end(bot, ops, this);
   });

}

function end(bot, ops, dispatcher) {

  let fetched = ops.active.get(dispatcher.guildID)

  fetched.queue.shift();

  if (fetched.queue.length > 0) {
    ops.active.set(dispatcher.guildID, fetched);

    play(bot, ops, fetched);
  } else {

    ops.active.delete(dispatcher.guildID);
  
    let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel
    
    if (vc) {
      vc.leave();
    }
  }
}

module.exports.help = {
  name: "play"
}
