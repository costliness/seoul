const Discord = require('discord.js');
{}
module.exports={
        name: 'av',
        description: 'show avatar',
        async execute(message, args, bot) {
                let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
                if(!mentionedMember) mentionedMember = message.member;

                const avEmbed = new Discord.MessageEmbed()
                 .setDescription(`[AvatarURL](${mentionedMember.user.displayAvatarURL()})`)
                 .setTitle(`${mentionedMember.user.tag}'s avatar`)
                 .setImage(mentionedMember.user.displayAvatarURL({ size: 2048, dynamic: true}))
                 .setAuthor(mentionedMember.user.tag, mentionedMember.user.displayAvatarURL({ dynamic: true }))
                 .setColor('FFFAFA')
                 .setTimestamp();

                 message.channel.send(avEmbed)
        }
}
