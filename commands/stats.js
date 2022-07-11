const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription('Check your wordle stats (TODO)'),
    async execute(interaction) {
        await interaction.reply(
            `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
        );
    },
};
