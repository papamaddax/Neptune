const db = require('quick.db')
module.exports = {
    name: "warn",
    aliases: ['w'],
    usage: '-warn <user> <reason>',
    execute(client, message, args, Discord, cmd) {
        if(!message.member.hasPermission('MANAGE_GUILD')){
            message.channel.send('Insufficient permissions')
            return;
           } 
        const target = message.mentions.users.first();
        const targetdm = message.mentions.members.first();

        var guildid = message.guild.id;
        if (!target) return message.channel.send('Please provide a user');
        if (!args[1]) return message.channel.send('Please provide a reason');
        let reason = args.slice(1).join(" ")

        message.channel.send(`${target} has been warned for ${reason}`)
        targetdm.send(`You have been warned for ${reason}`)
        db.push(`${guildid}.warns.${target.id}`, `**${reason}** \`Moderator: ${message.author.tag}\``)

    },
};