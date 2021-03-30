const db = require('quick.db')

module.exports = {
    name: "clearwarnings",
    aliases: ['clearwarn', 'cw'],
    execute(client, message, args, Discord) {
        if(!message.member.hasPermission('MANAGE_MEMBERS')){
            message.channel.send('Insufficient permissions')
            return;
           } 
        const target = message.mentions.users.first();
        var guildid = message.guild.id;
        db.delete(`${guildid}.warns.${target.id}`)
        message.channel.send(`Warnings have been cleared for ${target}`)


    },
};