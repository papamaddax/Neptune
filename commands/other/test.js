    module.exports = {
    name: "test",
    aliases: ['t'],
    execute(client, message, args, Discord, cmd) {
        const bar = '| 1 | |  2 | |  3 | |  4 | |  5 | |  6 | |  7 |'
        const embed = new Discord.MessageEmbed()
        .setDescription(`|\u200b embed |`)
        message.channel.send(embed)
     
    },
};