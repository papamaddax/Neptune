const Discord = require('discord.js')
const weather = require('weather-js')


module.exports = {
    name: 'weather',
    description: 'Check the weather',
    async execute(client, message, args, Discord) {
        const locationSearch = args.splice(1).join(" ")
        if (!locationSearch) {
            let embed = new Discord.MessageEmbed()
                .setColor("#F30B04")
                .setDescription("Please Provide a Valid Location!")
            return message.channel.send(embed);
        }

        if(args[0] !== 'f' && 'c'){
            message.channel.send('no')
            return
        }
        if (args[0] === 'f') {
            weather.find({
                search: locationSearch,
                degreeType: 'F'
            }, function (err, result) {
                try {

                    let embed = new Discord.MessageEmbed()
                        .setTitle(`Weather - ${result[0].location.name}`)
                        .setColor("#F30B04")
                        //.setDescription("**Real Time Weather**")
                        .addField("Temperature", `${result[0].current.temperature} F`, true)
                        .addField("Sky Text", result[0].current.skytext, true)
                        .addField("Humidity", result[0].current.humidity, true)
                        .addField("Wind Speed", result[0].current.windspeed, true)
                        .addField("Observation Time", result[0].current.observationtime, true)
                        .addField("Wind Display", result[0].current.winddisplay, true)
                        .setThumbnail(result[0].current.imageUrl);
                    message.channel.send(embed)
                } catch (err) {
                    let errem = new Discord.MessageEmbed()
                        .setColor("#F30B04")
                        .setDescription("**❌ Please Provide a Valid Location!**")
                    return message.channel.send(errem);
                }
            });

        }

        if (args[0] === 'c') {
            weather.find({
                search: locationSearch,
                degreeType: 'C'
            }, function (err, result) {
                try {

                    let embed = new Discord.MessageEmbed()
                        .setTitle(`Weather - ${result[0].location.name}`)
                        .setColor("#F30B04")
                        //.setDescription("**Real Time Weather**")
                        .addField("Temperature", `${result[0].current.temperature} Celcius`, true)
                        .addField("Sky Text", result[0].current.skytext, true)
                        .addField("Humidity", result[0].current.humidity, true)
                        .addField("Wind Speed", result[0].current.windspeed, true)
                        .addField("Observation Time", result[0].current.observationtime, true)
                        .addField("Wind Display", result[0].current.winddisplay, true)
                        .setThumbnail(result[0].current.imageUrl);
                    message.channel.send(embed)
                } catch (err) {
                    let errem = new Discord.MessageEmbed()
                        .setColor("#F30B04")
                        .setDescription("**❌ Please Provide a Valid Location!**")
                    return message.channel.send(errem);
                }
            });


        }


    }
}