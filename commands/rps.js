const Discord = require("discord.js");
module.exports.run = (bot, message, args, ops) => {
  let blue = ops.blue
  //----------------------
  let usage = new Discord.RichEmbed();
  usage.setColor(0x36393f)
  usage.setDescription("You can choose: Rock, Paper, or Scissors");
  //----------------------
    let rock2 = ["Paper! I win!", "Scissors! You win!"]
    let rock1 = Math.floor(Math.random() * rock2.length);
  
    let paper2 = ["Rock! You win!", "Scissors! I win!"]
    let paper1 = Math.floor(Math.random() * paper2.length);
  
    let scissors2 = ["Rock! I win!", "Paper! You win!"]
    let scissors1 = Math.floor(Math.random() * scissors2.length);
  
  let rock = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor(0x36393f)
  .addField("You Chose", `${args[0]}`)
  .addField("I Choose", `${rock2[rock1]} <:vrock:517498462732812326>`);
  
  let paper = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor(0x36393f)
  .addField("You Chose", `${args[0]}`)
  .addField("I Choose", `${paper2[paper1]} <:vpaper:517498462502387712>`)
  
  let scissors = new Discord.RichEmbed()
  .setAuthor("Rock, Paper, Scissors")
  .setColor(0x36393f)
  .addField("You Chose", `${args[0]}`)
  .addField("I Choose",  `${scissors2[scissors1]} <:vscissors:517498463299174400>`)
  
  
  if(args[0] == "rock") message.channel.send(rock)
 if(args[0] == "Rock") message.channel.send(rock)
  
if(args[0] == "paper") message.channel.send(paper)
 if(args[0] == "Paper") message.channel.send(paper)
  
 if(args[0] == "scissors") message.channel.send(scissors)
if(args[0] == "Scissors") message.channel.send(scissors)
  if(args[0] == "scissor") message.channel.send(scissors)
if(args[0] == "Scissor") message.channel.send(scissors)
  
  
  if (message.content === ">>rps") message.channel.send(usage)
  }

module.exports.help = {
    name: "rps"
}
