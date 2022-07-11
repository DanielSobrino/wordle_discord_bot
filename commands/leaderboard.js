const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription("Display the server's wordle leaderboard. (TODO)"),
    async execute(interaction) {
        await interaction.reply(
            `Available: ${interaction.guild.available}\nServer name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nOwner: ${interaction.guild.ownerId}\nCreated: ${interaction.guild.createdAt}`
        );
    },
};
