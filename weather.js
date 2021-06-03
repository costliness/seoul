const weather = require('weather-js');
const Discord = require('discord.js');

module.exports = {
  name: 'weather',
  description: "Used to get the weather of a place",
  async execute(message, args, client) {

    const city = args[0]

    weather.find({search: args.join(" "), degreeType: "C"}, function(error, result){

      if (error) return message.channel.send(error)
      if (!city) return message.channel.send("name it then bitch | s;weather (place)")

      if (result === undefined || result.length === 0) return message.channel.send("bitch are you fucking dumb that isnt a thing")

      let current = result[0].current
      let location = result[0].location

      const embed = new Discord.MessageEmbed()
      .setTitle(`${current.observationpoint}`)
      .setDescription(current.skytext)
      .setThumbnail(current.imageUrl)
      .setColor("#FFFAFA")
      .setTimestamp()
      .addField("temperature: ", current.temperature + "*C", true)
      .addField("wind speed: ", current.winddisplay, true)
      .addField("humidity: ", `${current.humidity}%`, true)
      .addField("timezone: ", `UTC${location.timezone}`, true)
      .setFooter("")

      message.channel.send(embed)

    })

  }
}
