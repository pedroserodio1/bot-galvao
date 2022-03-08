const { Client, Intents, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
var countSentiu = 0


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once('ready', () =>{
    client.user.setPresence({
        activities:[{
            name: "SENTIUUUUU",
            type: "PLAYING"
        }],
        status: "online"
    })
    console.log("Bot on")
});


client.on('messageCreate', message => {

    if (message.content.toUpperCase() == "277353"){
        message.channel.send(`Logado em ${client.guilds.cache.size} servers`)
        message.channel.send(`Foram ${countSentiu} execuções`)
    }
    
    
    
    if (message.content.toUpperCase() == 'GALVÃO?') {
        
        message.channel.send("Diga lá, Tino!");
        
        countSentiu++
        
    }
})

client.login(token)