const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription("Check the user's wordle stats (TODO)")
        .addUserOption((option) =>
            option.setName('target').setDescription("Display this user's stats")
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('target');

        if (user && user.id != interaction.user.id) {
            return interaction.reply(
                `***${user.username}'s stats***\nId: ${user.id}\nTag: ${user.tag}`
            );
        }
        return interaction.reply(
            `***Stats***\nId: ${interaction.user.id}\nTag: ${interaction.user.tag}`
        );
    },
};
