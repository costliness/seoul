const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'members',
	description: 'shows the number of the members in the server',
	async execute(message, args, client){
		const { guild } = message
		const memberCount = guild.memberCount
		
		const memberCountEmbed = new MessageEmbed()
		 .setTitle('member count')
		 .setDescription(memberCount)
		 .setColor('FFFAFA');
		 
		 message.channel.send(memberCountEmbed)
	}
}
