const { Client, Intents } = require('discord.js');

// create config.json with your token
const { token } = require('./config.json');

const client = new Client({
    autorun: true,
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply(
            `Available: ${interaction.guild.available}\nServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nOwner: ${interaction.guild.ownerId}\nCreated: ${interaction.guild.createdAt}`
        );
    } else if (commandName === 'user') {
        await interaction.reply(
            `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
        );
    }
});

client.login(token);
