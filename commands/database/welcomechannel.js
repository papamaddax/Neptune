const db = require('quick.db')
    
    module.exports = {
    name: "welcomechannel",
    aliases: ['wc'],
    async execute(client, message, args, Discord, cmd, Swiftcord, cord) {
        var guildid = message.guild.id
        if (!args[0]) return message.channel.send('please provide a channel')
        db.set(`${guildid}.welcomechannel`, args[0])
        message.channel.send(`<#${args[0]}> has been set to the welcome channel`)
        
     
    },
};