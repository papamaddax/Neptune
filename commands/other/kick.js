const Discord = require('discord.js')
module.exports = {
    name: 'kick',
    aliases: ['aliase'],
    async execute(client, message, args, Discord) {
            const member = message.mentions.members.first() || message.guild.members.get(args[0]);
            if(message.member.hasPermission('KICK_MEMBERS')) {
            if(member) {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                const embed = new Discord.MessageEmbed()
                .setTitle('Success!')
                .setColor('RANDOM')
                .setDescription(`Successfully kick ${memberTarget}.`)
                message.channel.send(embed).then (messag => { messag.delete({ timeout: 5000})});
            } else {
                const embed = new Discord.MessageEmbed()
                .setTitle('Error')
                .setDescription(`It seems as tho i cannot kick this user! Please ensure this user's rank is not higher than mine!`)
                message.channel.send(embed).then (messag => { messag.delete({ timeout: 5000})});
            }
            } else {
            const embed = new Discord.MessageEmbed()
            .setTitle('Error')
            .setDescription(`You currently do not have the permission KICK_MEMBERS. If you are mean't to have it please contact a administrator for your rank.`)
            message.channel.send(embed).then (messag => { messag.delete({ timeout: 5000})});
            }
        
    },
};