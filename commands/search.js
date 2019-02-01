const search = require('yt-search');
const Discord = require('discord.js')

module.exports.run = async (bot, message, args, ops) => {

let error = new Discord.RichEmbed()
    .setColor(0x36393f)
    .setDescription('🚫 Something went wrong.');
 
  

    search(args.join(' '), function(err, res) {
      if (err) return message.channel.send('🚫 Something went wrong.').then(msg => msg.delete(5000));

      let videos = res.videos.slice(0, 5);

      let resp = '';
      for (var i in videos) {
        resp += `**${parseInt(i)+1}** - ${videos[i].title}\n`;
      }

      resp += `\n**Choose a number between 1-${videos.length}**`;
let search = new Discord.RichEmbed()
.setTitle(`Results for ${args.join(' ')}`)
    .setColor(0x36393f)
    .setDescription(resp);
     message.channel.send(resp);
      
     /* const filterz = m => m.content.startsWith('b!play');
      
      message.channel.awaitMessages(filterz, { max: 1, time: 60000, errors: ['time'] })
  .then(collected => console.log(collected.size))
  .catch(collected => console.log(`Type ``cancel`` to cancel the search`)); */

      const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;

      const collector = message.channel.createMessageCollector(filter);

      collector.videos = videos;

      collector.once('collect', function(m) {

        let commandFile = require(`./play.js`);
        commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
      });
    });
}
module.exports.help = {
  name: "search"
}
