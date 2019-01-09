const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args, ops) => {
  message.delete()
   
  let NotDev = new Discord.RichEmbed()
  .setColor(0x36393f)
  .setDescription("Who **MUST** you hug?")


if (!["507408804145528832"].includes(message.author.id)) return message.channel.send(NotDev);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send(NotDev);

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let slappedembed = new Discord.RichEmbed()
    .setTitle("HUGS! ❤")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(0x36393f)

    message.channel.send(slappedembed)

}

module.exports.help = {
name: "hug"
}
