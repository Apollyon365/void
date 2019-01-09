const Discord = require('discord.js')
const Fortnite = require('fortnite')
const fortnite = new Fortnite("cde49088-74fe-427b-a593-eb3b3b436696");

module.exports.run = async (bot, message, args, ops) => {
  message.delete()
let grey = ops.grey
  //!fortnite NCN_Instinct          o my god took me 2 hours.

  let username = args.join(' ');
  let platform = args[1] || 'pc';

  let data = fortnite.user(username, platform).then(data => {
    let stats = data.stats;
    let lifetime = stats.lifetime;

    let score = lifetime[6]['Score'];
    let mplayed = lifetime[7]['Matches Played'];
    let wins = lifetime[8]['Wins'];
    let winper = lifetime[9]['Win%'];
    let kills = lifetime[10]['Kills'];
    let kd = lifetime[11]['K/d'];

    let embed = new Discord.RichEmbed()

    .setTitle("<a:FortniteLlama:517208988434038784> Players Stats <a:FortniteLlama:517208988434038784>")
    .setFooter(data.username)
    .setColor(grey)
    .addField("Wins <a:taketheL:517208985686900762>", wins, true)
    .addField("Kills <a:orange_justice2:517208990242045962>", kills, true)
    .addField("Score <a:defaultdance:517208989134487553>", score, true)
    .addField("Matches Played <a:taketheL:517208985686900762>", mplayed, true)
    .addField("Win Percentage <a:orange_justice2:517208990242045962>", winper, true)
    .addField("KDR <a:defaultdance:517208989134487553>", kd, true)

    message.channel.send(embed);
  }).catch(e => {
    console.log(e);
    let fail = new Discord.RichEmbed()
    .setFooter("Psst. This command doesn't work if a name has spaces")
    .setTitle("Cannot find Players Stats!")
    .setColor(0x36393f)
    .setDescription("Example:", ">>fortnite Ninja")
    message.channel.send(fail)
  })
           }

module.exports.help = {
  name: "fortnite"
}
