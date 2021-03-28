    
    module.exports = {
        name: "dev",
        aliases: [' '],
        execute(client, message, args, Discord) {
            let role = message.guild.roles.cache.find('813945946336657428')
            let target = message.member
            target.addRole(role)
         
        },
    };