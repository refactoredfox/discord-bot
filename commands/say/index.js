// Command say
// Deletes user message and repeats the content
const runCommand = (message, args) => {
  const text = args.join(" ");
  
  message.delete();
  message.channel.send(text);
};

module.exports = {
 runCommand 
}