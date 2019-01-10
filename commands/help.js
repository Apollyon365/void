const Discord = require("discord.js");
const db = require('quick.db')

module.exports.run = async (bot, message, args, ops) => {
  message.delete()

 let prehelp = new Discord.RichEmbed()
  .setTitle("Void Help Commands!")
  .setDescription("Don\'t worry! Help is on the way! \n🔗 [Invite Me](https://discordapp.com/oauth2/authorize?client_id=508122813299818511&scope=bot&permissions=2146958847)\n ❔ [Support Server](https://discord.gg/7xuEzbt)\n 🔺 [Vote for Void](https://discordbots.org/bot/508122813299818511/vote) \n 💰 [Donate for Void+](https://donatebot.io/checkout/515737847957946388)")
  .setColor(0x36393f)
message.channel.send(prehelp)
  //General
  let help1 = "`>>help` (Shows you all of the commands)"
  let ping = "`>>ping` (Shows how fast the bot responds in ms)"
  let remind = "`>>remind` `<text>` (Sets an reminder)"
  let settings = "`>>settings` (Coming Soon)"
  let stats = "`>>stats` (Shows the Uptime, Guilds, Users, Ram Usage of the bot)"
  let calc = "`>>calc` `<equation>` (Solves your problem)"
  let profile = "`>>profile` `<person>` (Shows the persons profile)"
  let vote = "`>>vote` (Shows you the vote link of Abyss)"
  // let level = "`>>level` [person] (Checks yours or a desired players level)"
  //Moderation
  let ban = "`>>ban` `<person>` `[reason]` (Bans the desired player)"
  let clear = "`>>clear` `<1-99>` (Clear messages from 1-99)"
  let invis = "`>>invis` `<text>` (Repeats what you say)"
  let kick = "`>>kick` `<person>` `[reason]` (Kicks the desired player)"
  let mute = "`>>mute` `<person>` `[reason]` (Mutes the desired player)"
  let unmute = "`>>unmute` `<person>` (Unmutes the desired person)"
  //Fun
  let eightball = "`>>8ball` `<question>` (Answers all.)"
  let dice = "`>>dice` (Rolls a number from 1-6)"
  let flip = "`>>flip` (Flips a coin. Heads or Tails?)"
  let rps = "`>>rps` `<rock,paper,scissors>` (Plays a game of rock, paper, scissors against Abyss)"
  let hack = "`>>hack` `<person>` (HaCkS tHe DeSiReD pErSoN)"
  let asktrump = "`>>asktrump` `<question>` (Ask Trump anything! Theres just 1 thing..)"
  let kiss = "`>>kiss` `<person>` (Ew.. Kisses)"
  let hugs = "`>>hug` `<person>` (Hugs! :3)"
  let slap = "`>>slap` `<person>` (Ow.)"
  //Searching
 // let fortnite = "`>>fortnite` `<ign>` `[platform]` (Shows the desired fortnite players stats)"
  let google = "`>>google` `<search>` (Searches what you want in google)"
  let youtube = "`>>youtube` `<search>` (Searches what you want in youtube)"
  //Music
  let play = "`>>play` `<search/link>` (Plays the suggested music)"
  let stop = "`>>stop`(Clears the queue list and stops the bots music)"
  let pause = "`>>pause` (Pauses the current music)"
  let resume = "`>>resume` (Resumes the music)"
  let volume = "`>>volume` `<1-200>` (Changes the volume from 1-200)"
  let search = "`>>search` `<search>` (Searches what you want in youtube for Abyss to play)"
  
  var prefix = '/';
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) prefix = '**/**';
else prefix = fetched;
  let p = `${fetched || prefix}`
  
  let help = new Discord.RichEmbed()
  .setTitle("Help Menu")
 .setDescription(`View the Commands [here](https://sites.google.com/view/voidbot/commmands)\n The Prefix for ${message.guild.name} is ${fetched || prefix}`)
  .setColor(0x36393f)
message.channel.send(help)
}
  module.exports.help = {
    name: "help"
    }
