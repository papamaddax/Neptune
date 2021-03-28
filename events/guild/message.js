const { rmSync } = require('fs');
const db = require('quick.db');


module.exports = async (Discord, client, message) => {
    var guildid = message.guild.id
    const prefix = db.get(`${guildid}.prefix`);
try{
    if(message.mentions.users.first().id == '809549638260359179') return message.channel.send(`My prefix is '${prefix}'`)
} catch(error) {

}
    try {
        if(message.channel.id !== db.get(`${guildid}.countingchannel`)) return;
        if(isNaN(message.content)) return;
        if(message.author.bot) return;


        var guildid = message.guild.id
        if(message.author.id == db.get(`${guildid}.lastCounter`)){
            message.delete()
            let sameSenderEmbed = new Discord.MessageEmbed()
            .setTitle(`Error, You cannot count two numbers in a row, restating at 1`)
            .setDescription(message.content)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("RED")
            message.channel.send(sameSenderEmbed)
            db.set(`${guildid}.number`, 1)
            return;
        }
        
        if (message.content == db.get(`${guildid}.number`)){
            db.add(`${guildid}.number`, 1)
            db.set(`${guildid}.lastCounter`, message.author.id)
            message.delete()
            let correctEmbed = new Discord.MessageEmbed()
            .setTitle('Correct')
            .setDescription(message.content)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("GREEN")
            message.channel.send(correctEmbed)
            console.log('new number:', +db.get(`${guildid}.number`))
            return;
        }

        if (message.content !== db.get(`${guildid}.number`)) {
            message.delete()
            let wrongEmbed = new Discord.MessageEmbed()
            .setTitle(`Incorrect! The correct number was ${db.get(`${guildid}.number`)}, restarting at 1`)
            .setDescription(message.content)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("RED")
            message.channel.send(wrongEmbed)
            db.set(`${guildid}.number`, 1)
        }

    } catch(error) {
        console.log(error)
    }

    if (!message.content.startsWith(prefix)) return;
    if (message.author.id == '586927858459475992') return message.channel.send('Down bad')


    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, Discord)


}
