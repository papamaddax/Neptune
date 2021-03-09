module.exports = {
    name: 'hug',
    aliases: ['h'],
    async execute(client, message, args, Discord) {
        if (!args[0]) {
            message.channel.send('You cant hug nobody')
            return;
                }
        const target = message.mentions.users.first()


        var hug = [
            "https://media1.tenor.com/images/4d89d7f963b41a416ec8a55230dab31b/tenor.gif",
            "https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif",
            "https://media1.tenor.com/images/42922e87b3ec288b11f59ba7f3cc6393/tenor.gif",
            "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif",
            "https://media.tenor.com/images/12ce5c56f8cf49aa0ad21df72eb0eeb1/tenor.gif",
            "https://media1.tenor.com/images/6db54c4d6dad5f1f2863d878cfb2d8df/tenor.gif",
            "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif",
            "https://media1.tenor.com/images/b7487d45af7950bfb3f7027c93aa49b1/tenor.gif",
            "https://media1.tenor.com/images/34a1d8c67e7b373de17bbfa5b8d35fc0/tenor.gif"
        ]
        let randomAnswer = hug[Math.floor(Math.random() * hug.length)];
        const hugEmbed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle(`${message.author.username} hugs ${target.username}`)
            .setImage(randomAnswer)

        const selfHugEmbed = new Discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle(`Neptune hugs ${message.author.username}`)
            .setImage(randomAnswer)



        
        if (target.id == message.author.id) return message.channel.send('You cant hug yourself but ill hug you', selfHugEmbed)
        message.channel.send(hugEmbed)
    }
}