const { Client, Events, GatewayIntentBits} = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });