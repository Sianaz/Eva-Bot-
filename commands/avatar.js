module.exports = {
  name: "avatar",
  description: "muestra el avatar de un miembro",
  execute(client, prefix, message, args) {
    const Discord = require('discord.js')
    let user =  message.mentions.users.first() || client.users.resolve(args[0]) || message.author
    let jpegg = user.avatarURL({format: 'jpeg', dynamic: true, size: 1024})
    let jpgg = user.avatarURL({format: 'jpg', dynamic: true, size: 1024})
    let pngg = user.avatarURL({format: 'png', dynamic: true, size: 1024})
    const error = new Discord.MessageEmbed() 
   .setTitle(`:warning: - Error`)
   .setDescription(`¡Oh no!, **${user.tag}** No tiene avatar`)
.setColor("#EDE545")
if(!user.avatarURL())return message.channel.send(error)
const embed = new Discord.MessageEmbed()
.setTitle(`Foto de prefil de ${user.tag}`)
.setDescription(`**[JPEG](${jpegg})** **[JPG](${jpgg})** **[PNG](${pngg})**`)
.setImage(user.avatarURL({dynamic: true, size: 1024}))
.setColor("RANDOM")
message.channel.send(embed)
  }
}