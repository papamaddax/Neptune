const db = require('quick.db');
module.exports = {
   name: "countset",
   aliases: ['c', 'cs'],
   execute(client, message, args, Discord) {
      var guildid = message.guild.id
      if (!args[0]) return message.channel.send('please provide a channel')
      db.set(`${guildid}.countingchannel`, args[0])
      console.log(db.get(`${guildid}.countingchannel`))
      message.channel.send(`<#${args[0]}> has been set to the counting channel`)
      db.set(`${guildid}.number`, 1)





   },
};