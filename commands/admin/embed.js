const db = require('quick.db')
    
    module.exports = {
    name: "embed",
    aliases: ['e'],
    execute(client, message, args, Discord, cmd) {
        var guildid = message.guild.id

        message.delete()
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have permissions for this command');
        if(!args[0]) return message.channel.send(`Please use this command correctly \`${db.get(`${guildid}.prefix`)}embed <Title> <color> <description>\``)
        let description = args.slice(2).join(" ")
        let title = args[0]
        let color = args[1].toUpperCase();
        
        let av = message.author.displayAvatarURL({ dynamic: true })
        let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setDescription(description)
        .setFooter(message.author.tag, av)
        message.channel.send(embed)
        
     
    },
};