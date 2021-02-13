module.exports = {
    name: "test",
    aliases: ["aliase"],
    execute(xlient, message, args) {
        message.channel.send("template command")
    },
};