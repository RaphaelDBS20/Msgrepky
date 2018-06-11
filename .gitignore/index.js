const Discord = require('discord.js');
const client = new Discord.Client();

client.setMaxListeners(0);

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
    msg.channel.send('Nous sommes tous triste de se déced...');
  }
});

client.on('message', msg => {
  if (msg.content === 'r.i.p') {
    msg.channel.send('Nous sommes tous triste de se déced...');
  }
});

client.on('message', msg => {
  if (msg.content === 'r.i.p.') {
    msg.channel.send('Nous sommes tous triste de se déced...');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('les mot a tapper : rip,issou,ping');
  }
});

client.on('message', msg => {
  if (msg.content === 'NICK TA MERE') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'NICK TA MÉRE') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'FILS DE PUTE') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'FILS DE PUTES') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'PUTE') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'PUTES') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'PUTE!') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'PUTES!') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'OH LA PUTE') {
    msg.reply('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'PUTE') {
    msg.content('ATTENTION LES INSULTES SONT INTERDITES SUR LE SERVER !');
  }
});

client.on('message', msg => {
  if (msg.content === 'caca') {
    msg.reply('Faut que tu murisse dans ta tete');
  }
});

client.on('message', msg => {
  if (msg.content === 'CACA') {
    msg.reply('Faut que tu murise dans ta tete');
  }
});

client.on('message', msg => {
  if (msg.content === 'CACA') {
    msg.reply('Faut que tu murise dans ta tete');
  }
});

client.on('message', msg => {
  if (msg.content === 'X)') {
    msg.channel.send('X-)');
  }
});

client.on('message', msg => {
  if (msg.content === 'XD') {
    msg.channel.send('X-D');
  }
})

client.on('message', msg => {
  if (msg.content === 'x)') {
    msg.channel.send('x-)');
  }
})

client.on('message', msg => {
  if (msg.content === 'mdr') {
    msg.channel.send('mdrr');
  }
})

client.on('message', msg => {
  if (msg.content === 'MDR') {
    msg.channel.send('MDRR');
  }
})

client.on('message', msg => {
  if (msg.content === 'lol') {
    msg.channel.send('loll');
  }
})

client.on('message', msg => {
  if (msg.content === 'LOL') {
    msg.channel.send('LOLL');
  }
})

client.login(process.env.loginuser)
