// Command pong
// Replies to a Ping with a Pong
const runCommand = (message, args) => {
	message.channel.send('pong');
};

module.exports = {
	runCommand
};
