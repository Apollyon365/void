//AIzaSyCQopRlDhHBoyrRNTYRIr9_V6h76OGWjRI

const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyCQopRlDhHBoyrRNTYRIr9_V6h76OGWjRI");



module.exports.run = async (bot, message, args, ops) => {

  youtube.searchVideos(args, 1)
      .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`YouTube search result for \"${args}\"`.split(',').join(' '))
          .setThumbnail(results[0].thumbnails.high.url)
          .setColor(0x36393f) //I personally use bubblegum pink!
          .addField('Title', results[0].title, true)
          .addField('Channel', results[0].channel.title, true)
          .addField('Link', `[Click Here](https://youtu.be/${results[0].id})`);

          message.channel.send(ytEmbed);
      })
      .catch(console.log);

}

module.exports.help = {
  name: "youtube"
}
