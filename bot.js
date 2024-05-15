// discord.js class imports
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const bot = new Client({
    intents: [GatewayIntentBits.Guilds]
});

bot.on(Events.ClientReady, readyClient => {
    console.log(`[bot]: ${readyClient.user.username} Ready.`);
});

bot.login(token);

