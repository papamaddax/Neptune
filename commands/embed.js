module.exports = {
    name: "embed",
    aliases: ["aliase"],
   async execute(client, Discord, message, args) {
       let title = args[0]
       let description = args.slice(2).join(" ")
       let color = args[1]
        const customEmbed = new Discord.MessageEmbed
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
        .setFooter(message.author.tag)
        message.channel.send(customEmbed)


    },
};