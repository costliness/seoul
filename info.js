const { MessageEmbed } = require('discord.js')

module.exports={
	name: 'info',
	description: 'shows all the commands of the bot',
	async execute(message, args, client){
                    const prefix = client.prefix
		if(args[0]) {
			const ctg = client.commands.get(args[0])
			if(!ctg) return message.reply('Invalid Command')
			const name = ctg.name
			const desc = ctg.description
			
			const ctgEmbed = new MessageEmbed()
			 .setTitle(`Name: ${name} \nDescription: ${desc}`)
                               .setColor('BLACK')
			 .setTimestamp();
			 
			 message.channel.send(ctgEmbed)
		} else {
			let cmds = client.commands.map(command => command.name)
			
			const allEmbed = new MessageEmbed()
			.setTitle('info')
			.setDescription('hey')
			.setThumbnail()
                              .setColor('#FFFAFA')
                              .setFooter("")
			.setTimestamp();
			
			 message.channel.send(allEmbed)
			
		}
	}
}
