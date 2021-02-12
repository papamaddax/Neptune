const prefix = '-';

const args = message.content.slice(prefix.length).split(",");

module.exports = {
    name: "embed",
    aliases: ["aliase"],
    execute(client, Discord, message) {
        const customEmbed = new Discord.MessageEmbed
        .setTitle(args[0])
        .setDescription(args[1])
        message.channel.send(customEmbed)


    },
};