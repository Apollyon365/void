
//botid: 508122813299818511
//Link: https://discordapp.com/oauth2/authorize?client_id=508122813299818511&scope=bot&permissions=8


//call certain functions
const Discord = require("discord.js");
const config = require("./config.json");
let token = config.token;
const bot = new Discord.Client();
const fs = require("fs");
bot.commands = new Discord.Collection();
const ownerID = '507408804145528832';
let blue = config.blue;
let cooldown = new Set();
let cdseconds = 3
let active = new Map();
let grey = config.grey;
var enabled = false
let TOKEN = process.env.TOKEN;
const db = require("quick.db")
//let xp = require('./xp.json');
const DBL = require('dblapi.js');


//to load the commands
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

jsfile.forEach((f, i) =>{
  delete require.cache[require.resolve(`./commands/${f}`)];
  let props = require(`./commands/${f}`);
  console.log(`${f} has sucessfully loaded!`);
  bot.commands.set(props.help.name, props);
});


bot.on("message", async message => {
  //a little bit of data parsing/general checks
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
var prefix = '.';
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) prefix = '.';
else prefix = fetched;
  if(!message.content.startsWith(prefix)) return;



//Cooldown commands in Chat (ill add settings soon.)
if(cooldown.has(message.author.id)){
  message.delete()
  let cooldown = new Discord.RichEmbed()
  .setTitle(message.author.username)
  .setDescription(`Woah, Woah... Slow down your requests!`)
  .setFooter('Please wait 3 seconds before using a command')
  .setColor(grey)
  return message.channel.send(cooldown)
}
if (!["507408804145528832"].includes(message.author.id)) {
  cooldown.add(message.author.id);

}

  // Ops to transfer
  let ops = {
    ownerID: ownerID,
    blue: blue,
    active: active,
    grey: grey,
    enabled: enabled
  }
   
  //checks if message contains a command and runs it
  let commandfile = bot.commands.get(command.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args,ops);

  setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
   


});

});




bot.on('message', async message => {
 if (message.content.startsWith("<@!508122813299818511>")) {
	 var prefix = '.';
let fetched = await db.fetch(`prefix_${message.guild.id}`);
if (fetched === null) prefix = '.';
else prefix = fetched;
message.delete()
let non = new Discord.RichEmbed()
.setTitle("INFO:")
.setDescription(`The Prefix for ${message.guild.name} is ${fetched || prefix}`)
.setColor(grey)
message.channel.send(non)
 }
})

  
//Statuses
bot.on('ready', () => { 
  console.log(`${bot.user.username} is watching ${bot.guilds.size} Discord Servers and ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users!`);
	let Activities = [
    `music to ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Users | .help`
                  
	];
	setInterval(function() {
		let activity = Activities[Math.floor(Math.random() * Activities.length)];
		bot.user.setActivity(activity, { type: 'PLAYING' }); //
  }, 10000);
});

bot.reminders = new Map();
bot.once('ready', function() {
    setInterval(() => {
        for (const [key, value] of this.reminders) {
            if (value.time < Date.now()) {
                this.channels.get(value.channel).send(value.message);
                this.reminders.delete(key);
            };
        };
    }, 5000);
});
//Guild Invite Join
bot.on('guildCreate', guild => {
let welcome = new Discord.RichEmbed()
    .setTitle("😄 Thank you for inviting me to your server! 😄")
  .setDescription("I was made by Apollyon365#3607")
    .setColor(0x36393f)
    .addField("Links", "🔗 [Invite Me](https://discordapp.com/oauth2/authorize?client_id=508122813299818511&scope=bot&permissions=2146958847)\n ❔ [Support Server](https://discord.gg/7xuEzbt)")
    .addField("Prefix", "<:vmore:517907860861222923> Prefix for this bot is ``.``\nIf you wish to change it please do ``.setprefix <prefix>``\nIf you forget your prefix mention the bot")
    .addField("Help Commands", "Type ``.help`` for the commands!")
	guild.channels.filter(c => c.type === 'text').first().send(welcome);
});


bot.login(process.env.BOT_TOKEN)
