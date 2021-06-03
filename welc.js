const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'welc',
	description: 'shows the number of the members in the server',
	async execute(message, args, client){
		const { guild } = message
		const memberCount = guild.memberCount
		
		const memberCountEmbed = new MessageEmbed()
		 .setTitle('welcome to seoul!')
		 .setDescription('<:w_line:836330544346169345> talk to our members <#832692299715706887>\n<:w_line:836330544346169345> get your roles here! <#832692299715706883>\n<:w_line:836330544346169345> get some colours/colors <#840368261798952991>! \n<:w_line:836330544346169345> check out <#842882810162708491> and support!\n<:w_line:836330544346169345> make sure to read <#842216342790733844>!!\n\nlastly, welcome to seoul! <a:w_hearts:836330544224272384>\n\n[**・our invite link ・**](https://discord.gg/milfs)')
		 .setColor('FFFAFA');
		 
		 message.channel.send(memberCountEmbed)
	}
}
