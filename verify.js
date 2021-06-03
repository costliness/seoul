const { MessageEmbed } = require('discord.js');
module.exports = {
	name: 'verify',
	description: 'use this command to verify',
	async execute(message, args, client, Discord) {
		const successEmbed = new MessageEmbed()
			.setTitle('success!')
			.setDescription('you have been verified in seoul!\n\n<:w_line:836330544346169345> talk to our members <#832692299715706887>\n<:w_line:836330544346169345> get your roles here! <#832692299715706883>\n<:w_line:836330544346169345> get some colours/colors <#840368261798952991>! \n<:w_line:836330544346169345> check out <#842882810162708491> and support!\n<:w_line:836330544346169345> make sure to read <#842216342790733844>!!\n\nlastly, welcome to seoul! <a:w_hearts:836330544224272384>')
			.setColor('FFFAFA');

		if (!message.member.roles.cache.has('832692299410178115')) {
			message.delete();
			await message.member.roles
				.add('832692299410178115')
				.then(message.author.send(successEmbed));
		} else {
			message.reply('you already have the role "**members**"!');
		}
	}
};
