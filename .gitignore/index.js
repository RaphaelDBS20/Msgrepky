const Discord = require('discord.js');
const client = new Discord.Client();

client.setMaxListeners(0);

client.on('ready', () => {
  client.user.setPresence({ game: { name: '[m!help] Pour de l`aide', type: 0}})
  console.log(`Connecter en tant que : ${client.user.tag}!`);
});


client.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "GENS")
    member.guild.channels.find("name", "bienvenue").send(`:video_game: Bienvenue a toi **${member.user.username}** je te consseil de lire les régles avant de continuer`)
    member.addRole(role)
})

client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "bienvenue").send(`:space_invader: **${member.user.username}** a quitté le server au revoir...`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === 'issou') {
    msg.reply('Grace a toit la fete et presente chez risitas !');
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

client.on('message', msg => {
  if (msg.content === 'ai') {
    msg.channel.send('aii allez !');
  }
});

client.on('message', msg => {
  if (msg.content === 'un hackeur !') {
    msg.channel.send('Un hackeur ou sa ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Un hackeur !') {
    msg.channel.send('Un hackeur ou sa ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'UN HACKEUR !!!') {
    msg.channel.send('Un hackeur ou sa ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'UN HACKEUR') {
    msg.channel.send('Un hackeur ou sa ?');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!help') {
    msg.reply('Voici les commandes et les fonction : m!about(les infos du bot) si vous ecrivez exemple : ai le bot vous répondra quelque chose');
  }
});

client.on('message', msg => {
  if (msg.content === 'm!about') {
    msg.channel.send('Bot héberger sur github et émuler par heroku bot coder en : javascript (node.js) la version du bot : b00008');
  }
});

client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

client.login(process.env.loginuser)
