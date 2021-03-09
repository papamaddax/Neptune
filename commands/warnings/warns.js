const db = require('quick.db')
    
    module.exports = {
    name: "warns",
    aliases: ['checkwarn', 'warnings'],
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission('MANAGE_MEMBERS')){
            message.channel.send('Insufficient permissions')
            return;
           } 
        try{
            if(!args[0]) return message.channel.send('You need to mention a user')
        let target = message.mentions.users.first();
        var guildid = message.guild.id;
        let warns = db.get(`${guildid}.warns.${target.id}`)

        const warnEmbed = new Discord.MessageEmbed()
        .setTitle(`${target.username}\'s warnings`)
        .setDescription(warns)
        if(warns.length > 1) warnEmbed.setFooter(`${warns.length} warnings`)
        if(warns.length == 1) warnEmbed.setFooter(`${warns.length} warning`)

        
        message.channel.send(warnEmbed)
        } catch(error){
        let target = message.mentions.users.first();

        const noWarns = new Discord.MessageEmbed()
        .setTitle(`${target.username}\'s warnings`)
        .setDescription(`No warnings to be shown`)
        message.channel.send(noWarns)
        }
        
    },
};