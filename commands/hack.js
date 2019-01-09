const Discord = require('discord.js')
//bot.guilds.map ($ => $.name) <- calls the name of the servers its in
module.exports.run = async (bot, message, args) => {

message.delete();
let huser = message.mentions.users.first();
    //----------------------
    let whohack = new Discord.RichEmbed();
    whohack.setColor(0x36393f)
    whohack.setDescription("Who must I hack?");
if (!huser) return message.channel.send(whohack)
  
    //----------------------
    let start1 = new Discord.RichEmbed();
    start1.setColor(0x36393f)
    start1.setDescription(`Hack on \`\`${huser.username}\`\` has been initiated`);
    //----------------------
    let start2 = new Discord.RichEmbed();
    start2.setColor(0x36393f)
    start2.setDescription(`Finding \`\`${huser.username}\`\`'s discord login.`);
    //----------------------
    let start3 = new Discord.RichEmbed();
    start3.setColor(0x36393f)
    start3.setDescription(`**Found:** \n**Email:** \`\`${huser.username}@gmail.com\`\`\n **Password:** \`\`********\`\``);
    //----------------------
    let start4 = new Discord.RichEmbed();
    start4.setColor(0x36393f)
    start4.setDescription(`Spamming DMs`);
    //----------------------
    let start5 = new Discord.RichEmbed();
    start5.setColor(0x36393f)
    start5.setDescription(`Finding IP Address.`);
    //----------------------
    let start6 = new Discord.RichEmbed();
    start6.setColor(0x36393f)
    start6.setDescription(`Spamming email.`);
    let start7 = new Discord.RichEmbed();
    start7.setColor(0x36393f)
    start7.setDescription(`The hack on \`\`${huser.username}\`\` is complete.`);

    

    message.channel.send(start1).then(m => {
        setTimeout(() =>{
          m.edit(start2).then(m => {
              setTimeout(()=> {m.edit(start3).then(m => {
                setTimeout(()=> {m.edit(start4).then(m => {
                    setTimeout(()=> {m.edit(start5).then(m => {
                        setTimeout(()=> {m.edit(start6).then(m => {
                            setTimeout(()=> {m.edit(start7)
                          }, 2000)
                        })
                      }, 2000)
                    })
                  }, 2000)
                })
              }, 2000)
            })
            }, 2000)
          })
        }, 2000)
      })

}
  module.exports.help = {
    name: "hack"
  }
