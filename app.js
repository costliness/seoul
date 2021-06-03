require('dotenv').config()

const { Client, Collection } = require('discord.js')
const client = new Client()
const fs = require('fs')

client.prefix = 's;'
client.commands = new Collection()

const prefix = client.prefix

const commandFiles = fs
	.readdirSync('./commands/')
	.filter(file => file.endsWith('.js'));

for (file of commandFiles) {
	const command = require(`./commands/${file}`);
	if (command.name) {
		client.commands.set(command.name, command);
		console.log('Loading ' + command.name)
	} else {
		continue;
	}
}

client.on('ready', () => {
          console.log(`${client.user.tag} is online!`)
          client.user.setActivity('.gg/milfs', {type: 'WATCHING'})
})

client.on('message', (message) => {
          if(message.author.bot) return
          if (message.content === `<@!${client.user.id}>`)
		return message.reply(
			`prefix: **s;**`
		);
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.get(cmd);

	if (command) command.execute(message, args, client);
})

require('./server')
client.login(process.env.TOKEN)
