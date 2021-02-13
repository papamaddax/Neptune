module.exports = {
    name: "test",
    aliases: ["aliase"],
    execute(message, args) {
        message.channel.send("template command")
    },
};