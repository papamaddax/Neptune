const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    description: "shows the bot/'s ping",
    execute(message, args, Discord) {
        const embed = new MessageEmbed()
        .setTitle("Ping")
     message.channel.send('loading...').then((msg) => {
      var ping = msg.createdTimestamp - message.createdTimestamp; 
      msg.delete()
      embed.setColor("#90e78d")
      embed.setDescription("Pong! bot\'s ping is" + ping +'ms')

      message.channel.send(embed) 
    });
    },
   };