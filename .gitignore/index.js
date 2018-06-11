const Discord = require('discord.js');
const client = new Discord.Client();
new Number(#40A497);

client.on('ready', () => {
  client.user.setPresence({ game: { name: '[m!help]', type: 0}})
  console.log(`Connecter en tant que : ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'issou') {
    msg.reply('Grace a toit la fete et presente chez risitas');
  }
});

client.on('message', msg => {
  if (msg.content === 'rip') {
    msg.reply('nous sommes tous triste de se déced...');
  }
});

client.on('message', msg => {
  if (msg.content === 'r.i.p') {
    msg.channel.send('nous sommes tous triste de se déced...');
  }
});

client.on('message', msg => {
  if (msg.content === 'r.i.p.') {
    msg.reply('nous sommes tous triste de se déced...');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('les mot a tapper : rip,issou,ping');
  }
});

client.login(process.env.loginuser)
