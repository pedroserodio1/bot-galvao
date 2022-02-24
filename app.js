const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once('ready', () =>{
    client.user.setPresence({
        activities:[{
            name: "SENTIUUUUU",
            type: "PLAYING"
        }],
        status: "online"
    })
    console.log(`Logado em ${client.guilds.cache.size} servers`)
    console.log("Bot on")
});

client.on('messageCreate', message => {

    let countSentiu = 0


    if (message.content.toUpperCase() == 'GALVÃO?') {

        message.channel.send("Diga lá, Tino!");

        countSentiu++

        console.log(`Ja foi ${countSentiu} SENTIUUUU`);

    }
})

client.login(token)