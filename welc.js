const { MessageEmbed } = require('discord.js')

module.exports={
	name: 'help',
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
			.setTitle('hi welcome to seoul!')
			.setDescription('my prefix is **s;**\n\n``av/avatar`` - shows the mentioned or your avatar\n``members`` - shows you how many members are in the specified server\n`uptime` - shows the uptime of the bot\n`weather (county)` - shows you the weather in a specified country\n``welc`` - show a welcome message!\n\nmore soon lol!!')
			.setThumbnail(client.user.displayAvatarURL())
                              .setColor('FFFAFA')
                              .setFooter("")
			
			 message.channel.send(allEmbed)
			
		}
	}
}
