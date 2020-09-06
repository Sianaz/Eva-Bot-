module.exports = {
  name: "setleave",
  description: "Cambia el canal de despedidas",
  execute(client, prefix, message, args) {
       const Discord = require("discord.js")
    const db = require('quick.db')
       let channel =  message.mentions.channels.first()
       const NOADMIN = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debes tener permisos de administrador")
.setColor("#EDE545")
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(NOADMIN);
const ERROR = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debe mencionar un canal")
.setColor("#EDE545")
    const NOVIEW = new Discord.MessageEmbed()
    .setTitle(":warning: - Error")
    .setDescription("¡Oh no!, en el canal mencionado no tengo permisos!")
    if(!message.mentions.channels.first().permissionsFor(message.guild.me).has('VIEW_CHANNEL')) return message.channel.send(NOVIEW)
        if(!message.mentions.channels.first().permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.channel.send(NOVIEW)
    if(!channel)return message.channel.send(ERROR)
    db.set(`leavechannel_${message.guild.id}`, channel.id)
  const EMBED = new Discord.MessageEmbed()
  .setTitle(":white_check_mark: - Perfecto")
  .setDescription(`\`${channel.name}\` Se ha establecido como canal de despedidas`)
  .setColor("#0CFF00")
   message.channel.send(EMBED)
  }};
