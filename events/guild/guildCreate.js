const db = require('quick.db');

module.exports = async (Discord, client, guild) => {
    var guildid = guild.id
    db.set(`${guildid}`, {serverName: guild.name})
    db.set(`${guildid}.prefix`, '-')




}
