const db = require('quick.db')
    
    module.exports = {
    name: "smd",
    aliases: ['suckme'],
    execute(client, message, args, Discord) {
     message.channel.send(`${message.author.toString()} wants some of that sloppy toppy. whos up for it`)
    },
};