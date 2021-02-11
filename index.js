const  Discord = require('discord.js');

const client = new Discord.Client();
require('dotenv').config();

const fs = require('fs');

client.commands = new Discord.Collection();
client.commands = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})


/* client.on("message", (message) => {
    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case '-clock':
            client.commands.get('clock').execute(message, args);
            break;

        case '-suggest':
            client.commands.get('suggest').execute(message, args);
            break;

        case '-rq':
            client.commands.get('request').exectue(message, args);
            break;
        case '-documents':
            client,commadns.get('documents').execute(message, args)
            break;





    }


})
*/
client.login(process.env.DISCORD_TOKEN);