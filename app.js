const Discord = require('discord.js');
const config = require('./config.json');
const app = require('./express.js');
const handler = require('./commands/handler.js');

const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  // Remove command charactor from message
  // Split into array by whitespace
  const args = message.content.slice(config.prefix).trim().split(/ +/g);
  // Seperate command key from message array
  const command = args.shift().toLowerCase();
  
  if (message.content.startsWith(config.prefix + "ping")) {
    console.log(command);
    handler[command.substr(1)].runCommand(message);
  }
});
