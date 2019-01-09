const Discord = require("discord.js");


module.exports.run = async (bot, message, args, ops) => {
  message.delete()

 let prehelp = new Discord.RichEmbed()
  .setTitle("Void Help Commands!")
  .setDescription("Don\'t worry! Help is on the way! \n🔗 [Invite Me](https://discordapp.com/oauth2/authorize?client_id=508122813299818511&scope=bot&permissions=2146958847)\n ❔ [Support Server](https://discord.gg/7xuEzbt)\n 🔺 [Vote for Void](https://discordbots.org/bot/508122813299818511/vote) \n 💰 [Donate for Void+](https://donatebot.io/checkout/515737847957946388)")
  .setColor(0x36393f)
message.author.send(prehelp)
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
  
  let help = new Discord.RichEmbed()
  .setTitle("General Commands")
 .setDescription(help1 + "\n" + ping + "\n" + remind + "\n" + settings + "\n" + stats + "\n" + calc + "\n" + profile + "\n" + vote)
  .setFooter("\"<>\" is required while \"[]\" is optional.")
  .setColor(0x36393f)
message.author.send(help)
  
   let help2 = new Discord.RichEmbed()
  .setTitle("Moderaton Commands")
 .setDescription(ban + "\n" + clear + "\n" + invis + "\n" + kick + "\n" + mute + "\n" + unmute)
  .setFooter("\"<>\" is required while \"[]\" is optional.")
  .setColor(0x36393f)
message.author.send(help2)
  
  let help3 = new Discord.RichEmbed()
  .setTitle("Fun Commands")
  .setDescription(eightball + "\n" + dice + "\n" + flip + "\n" + rps + "\n" + hack + "\n" + asktrump + "\n" + kiss + "\n" + hugs + "\n" + slap)
  .setFooter("\"<>\" is required while \"[]\" is optional.")
  .setColor(0x36393f)
  message.author.send(help3)
  
  let help4 = new Discord.RichEmbed()
  .setTitle("Searching Commands")
  .setDescription(google + "\n" + youtube)
  .setColor(0x36393f)
  .setFooter("\"<>\" is required while \"[]\" is optional.")
  message.author.send(help4)
  
  let help5 = new Discord.RichEmbed()
  .setTitle("Music Commands")
  .setDescription(play + "\n" + stop + "\n" + pause + "\n" + resume + "\n" + volume + "\n" + search)
  .setColor(0x36393f)
  .setFooter("\"<>\" is required while \"[]\" is optional.")
  message.author.send(help5)
  
 let helpsent = new Discord.RichEmbed()
  .setTitle("Sent you the Commands! ✅")
  .setDescription("Check your dms! If you didn't get one check if your dms is public!")
  .setFooter("This message will delete in 5 seconds")
  .setColor(0x36393f)
  message.channel.send(helpsent).then(msg => {msg.delete(5000)});
  
    //Developer Commands Page 1
      let reboot = "`>>reboot` (Reboots the bot)"
      let reload = "`>>reload` <command> (Reloads a command)"
      let statsserver = "`>>stats server(s)` (Shows a list of all the servers the bot is in along with its ID)"
      let evals =  "`>>eval` <code> (Pretty Much a calculator. Along with some other basic JS codes)"
      let botleave = "`>>botleave` <guild-id> [reason] (Bot leaves the guild)"


   let devs = new Discord.RichEmbed()
  .setDescription("Dev Commands:")
  .setTitle("Secret Help Command (1/1)")
   .addField("Dev Commands", reboot + "\n" + reload + "\n" + statsserver + "\n" + evals + "\n" + botleave) 
  .setColor(0x36393f)
  
    if(args[0] == "dev" && !["507408804145528832"]) message.author.send(devs)
  if(args[0] == "devs" && !["507408804145528832"]) message.author.send(devs)
  
  }

  module.exports.help = {
    name: "help"
    }
