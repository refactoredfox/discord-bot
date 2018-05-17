// Command say
// Deletes user message and repeats the content
const runCommand = (message, args) => {
  const text = args.slice(1).join(" ");
  
  message.delete();
  message.channel.send(text);
};

module.exports = {
 runCommand 
}