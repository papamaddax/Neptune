module.exports = {
    name: "bug",
    description: 'let users report bugs',
    async execute(client, message, args, Discord){
        const reportchannel = client.channels.cache.get('735972527683272814')
        const query = args.join(' ');
        const FixEmoji = '✅'

        if(!query) return message.reply('Please specify the bug')
        
        const reportEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('New Bug Reported!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        reportchannel.send(reportEmbed)
        message.react(FixEmoji)
       
    
        client.on('reportReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id == reportchannel){
                if(reaction.emoji.name === FixEmoji){
                    message.author.channel.send('The Bug has been Fixed !')
                }
            }else{
                return;
            }
        });

        message.channel.send("**Bug report has been sent!**")
        
        message.delete();


    }
}