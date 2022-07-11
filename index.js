const Discord = require('discord.js');
// create auth.json with your token
const auth = require('./auth.json');

const client = new Discord.Client({
    token: auth.token,
    autorun: true,
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (user, userID, channelID, message, evt) => {
    // command: '!w something'
    if (message.substring(0, 3) == '!w ') {
        let args = message.substring(1).split(' ');
        let cmd = args[1]; // one-worded command
        args = args.splice(1);

        switch (cmd) {
            // !w me
            case 'me':
                bot.sendMessage({
                    to: channelID,
                    message: `You're ${user}. You just used ${cmd}`,
                });
                break;
        }
    }
});
