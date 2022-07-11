const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stats')
        .setDescription("Check the user's wordle stats (TODO)")
        .addUserOption((option) =>
            option.setName('target').setDescription("The user's stats to show")
        ),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (user)
            return interaction.reply(
                `${user.username}'s stats:\nId: ${user.id}\nTag: ${user.tag}`
            );
        return interaction.reply(
            `Your id: ${interaction.user.id}\nYour tag: ${interaction.user.tag}`
        );
    },
};
