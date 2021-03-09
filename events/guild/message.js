const db = require('quick.db');


module.exports = async (Discord, client, message) => {
    var guildid = message.guild.id
    const prefix = db.get(`${guildid}.prefix`);
try{
    if(message.mentions.users.first().id == '809549638260359179') return message.channel.send(`My prefix is '${prefix}'`)
} catch {

}
    try {


        var guildid = message.guild.id
        if (message.content == db.get(`${guildid}.number`) && message.channel.id == db.get(`${guildid}.countingchannel`)) {
            db.add(`${guildid}.number`, 1)
            message.react('✅')
            console.log('new number:', +db.get(`${guildid}.number`))
            return;
        }
        if (message.channel.id == db.get(`${guildid}.countingchannel`) & !isNaN(message.content) & message.content !== db.get(`${guildid}.number`)) {
            message.channel.send(`Incorrect! The correct number was ${db.get(`${guildid}.number`)}, restarting at 1`)
            message.react('❌')
            db.set(`${guildid}.number`, 1)
        }

    } catch (error) {
        console.log(error)
    }

    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    if (!message.content.startsWith(prefix)) return;
    if (message.author.id == '586927858459475992') return message.channel.send('Down bad')


    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, args, Discord)


}
