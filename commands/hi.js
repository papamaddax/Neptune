module.exports = {
    name: 'pfp',
    description: "send users avatars",
    execute(message, args, Discord, client) {
        let sender = message.mentions.users.first() || message.author;
      var images = sender.displayAvatarURL({ dynamic: true });
      const avartarembed = new MessageEmbed()
        .setImage(images)
        .setFooter(`${sender.tag}`);
      message.channel.send(avartarembed);
    }
}