module.exports = (Discord, client, message) =>{
    console.log(`${client.user.tag} is online`);
    client.user.setPresence({ activity: { type: 'WATCHING',name: '-help' },  status: 'dnd' });
}