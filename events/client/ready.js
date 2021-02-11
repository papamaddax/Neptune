module.exports = (Discord, client) =>{
    console.log(`${client.user.tag} is online`);
    client.user.setPresence({ activity: { type: 'WATCHING',name: 'AAA Server' },  status: 'dnd' });
}