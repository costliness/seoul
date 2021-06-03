const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'uptime',
  description: 'Shows the uptime of eethe bot',
  async execute(message, args, client, Discord) {
    const moment = require('moment');
		require('moment-duration-format');
		const duration = moment
			.duration(client.uptime)
			.format(' D [days], H [hrs], m [mins], s [secs]');
			
			const embed = new MessageEmbed()
			.setTitle('uptime; ' + duration)
			.setTimestamp()
			.setColor('FFFAFA');
			
			message.channel.send(embed)
  }
}
