const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
 message.delete()
  
  var trump = [ // sets the answers to an trump
        "<:TrumpStare:518232599131324418> MEXICANS!",
        "<:TrumpDisgust:518232599500423168> POLITICS!",
        "<:TrumpHappy:518232598863020064> WALL!",
        "<:TrumpSpeech:518232599483777037> ILLEGAL IMMIGRANTS!",
        "<:TrumpStare:518232599131324418> ORANGE IS THE NEW BLACK!",
        "<:TrumpDisgust:518232599500423168> TERRORISM",
        "<:TrumpHappy:518232598863020064> MONEY!",
        "<:TrumpSpeech:518232599483777037> OIL",
        "<:TrumpStare:518232599131324418> SEXUAL ASSSAULT!",
        "<:TrumpDisgust:518232599500423168> WRONG!",
        "<:TrumpHappy:518232598863020064> ITS GONNA BE HUUGE!",
        "<:TrumpSpeech:518232599483777037> MAKE AMERICA GREAT AGAIN!",
        "<:TrumpStare:518232599131324418> I LOVE LATINOS AND THE BLACKS!",
        "<:TrumpDisgust:518232599500423168> COVFEFE",
        "<:TrumpHappy:518232598863020064> NAZIS ARENT BAD PEOPLE!",
        "<:TrumpSpeech:518232599483777037> EMAILS!"
    ]
  
    let embed = new Discord.RichEmbed();
    embed.setColor(0x36393f)
     embed.setDescription(`**${message.author.username}:** ` + args.join(" ") + "\n" + "**Trump:** " + trump[Math.floor(Math.random() * trump.length).toString(16)]);

     let embed1 = new Discord.RichEmbed();
     embed1.setColor(0x36393f)
      embed1.setDescription("What shall you ask Trump?");
 
        if (args[1] != null) message.channel.send(embed); // if args[1], post random answer
        else message.channel.send(embed1); // if not, error
      
  

    
  


}
module.exports.help = {
    name: "asktrump"
}
