// const mongo = require("../../mongo");
const db = require('quick.db');

module.exports = async (Discord, client, message) => {
    console.log(`${client.user.tag} is online`);
    client.user.setPresence({
        activity: {
            type: 'WATCHING',
            name: `-help`
        },
        status: 'dnd'
    });


}