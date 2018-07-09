const Discord = require("discord.js");
const Token = "MzIzMTM4OTY1NzYwNjM4OTg2.DiQPxw.K6hC9BysrjrQ984wcD4cQP5snJQ";
const Prefix = "!";
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const tableSource = new EnmapLevel({name: "myTable"});
const myTable = new Enmap({provider: tableSource});
var rbx = require('roblox-js');

var bot = new Discord.Client();

bot.on("message", function(message){
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(Prefix)) return;

  var args = message.content.substring(Prefix.length).split(" ");
  var args2 = message.content.substring(Prefix.length).split("+:");

switch (args[0]){


          case "embed":
          rbx.getIdFromUsername(args2[3]).then(function(userid) {
            rbx.getRankNameInGroup("1137634",userid).then(function(rank) {

              const rank2 = rank;

              let role = message.guild.roles.find("name","embedprivs")
              var user = message.member.roles.has(role)

              if (message.member.roles.has(role.id))
              {
                message.delete();
                const embed = new Discord.RichEmbed()
                .setTitle(args2[1])
                .setAuthor(message.author.username, message.author.avatarURL)
       .setColor(0x00AE86)
       .setDescription(args2[2])
       .setFooter(rank2, bot.user.avatarURL)
       .setTimestamp()
            message.channel.send({embed});
              } else {
                message.delete();
                const embed = new Discord.RichEmbed()
                .setTitle("Permission Denied")
                .setAuthor(bot.user.username, bot.user.avatarURL)
       .setColor(0x00AE86)
       .setDescription("Ask to receive correct permissions by a server administrator.")
       .setFooter(bot.user.username, bot.user.avatarURL)
       .setTimestamp()
       message.channel.send({embed});
              }
            })
           })
          break;

case "test":
//rbx.getRankInGroup("758071","")
rbx.getIdFromUsername(args2[3]).then(function(userid) {
  rbx.getRankNameInGroup("1137634",userid).then(function(rank) {
    var rank2 = rank;
  })
})
break;
          case "commands":

          message.author.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "Commands",
    url: "",
    description: "These commands are subject to permissions within roles.",
    fields: [{
        name: "!embed +:[Title] +:[Description] +:[Username]",
        value: "Embeds the current users message to the user's desire."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© Redzv 2018"
    }
  }
});
break;


  default:
      message.channel.sendMessage("Invalid Command, do !commands.");
      message.delete();
}
});

 bot.login(process.env.BOT_TOKEN);
 console.log("\x1b[33m", "Helper bot has started!");
