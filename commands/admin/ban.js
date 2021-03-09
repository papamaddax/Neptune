module.exports = {
    name: "ban",
    aliases: ['b'],
    execute(client, message, args, Discord, cmd) {

        const target = message.mentions.users.first()


        let userToBan = args[0]

        let banReason = args.slice(1).join(" ")

        if (!message.member.hasPermission('BAN_MEMBERS')) return;

        if (!userToBan) {
            message.channel.send('You need to mention a user')
            return;
        }
        if (message.mentions.members.first().hasPermission("MANAGE_CHANNELS")) {
            message.channel.send('I cant ban that user')
            return;
        }
        if (!banReason) {
            message.channel.send('You need to provide a reason')
            return;
        }
        const targetMember = message.guild.members.cache.get(target.id)

        targetMember.ban({
            reason: banReason
        }).catch((err) => {
            console.log(err)
        })
        message.channel.send(`${target} has been sucessfully banned. Reason: ${banReason}`)

        message.delete()


    },
};