const db = require('quick.db')
    
    module.exports = {
    name: "prefix",
    aliases: ['p'],
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission('ADMINISTRATOR')){
         message.channel.send('Insufficient permissions')
         return;
        } 

        if(!args[0]) return message.channel.send('I cant set the prefix to nothing')
        var guildid = message.guild.id
       
        db.set(`${guildid}.prefix`, args[0])
        message.channel.send(`Prefix has been set to ${args[0]}`)
     
    },
};  