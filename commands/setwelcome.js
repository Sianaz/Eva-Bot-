module.exports = {
  name: "setwelcome",
  description: "Cambia el canal de bienvenidas de un servidor",
  execute(client, prefix, message, args) {
       const Discord = require("discord.js")
    const db = require('quick.db')
       let channel =  message.mentions.channels.first() 
       const NOEMBED = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar embeds en ${message.channel}`)
const NOMESSAGE = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar mensajes en ${message.channel}`)
.setColor("#EDE545")
if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return message.author.send(NOEMBED)
if(!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.author.send(NOMESSAGE)
 
       const NOADMIN = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debes tener permisos de gestionar servidor")
.setColor("#EDE545")
 if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(NOADMIN);
const ERROR = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debe mencionar un canal")
.setColor("#EDE545")
    if(!channel)return message.channel.send(ERROR)
    const NOVIEW = new Discord.MessageEmbed()
    .setTitle(":warning: - Error")
    .setDescription("¡Oh no!, en el canal elegido no tengo permisos!")
    if(!message.mentions.channels.first().permissionsFor(message.guild.me).has('VIEW_CHANNEL')) return message.channel.send(NOVIEW)
        if(!message.mentions.channels.first().permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.channel.send(NOVIEW)
    db.set(`welchannel_${message.guild.id}`, channel.id)
  const EMBED = new Discord.MessageEmbed()
  .setTitle(":white_check_mark: - Perfecto")
  .setDescription(`\`${channel.name}\` Se ha establecido como canal de bienvenidas`)
  .setColor("#0CFF00")
   message.channel.send(EMBED)
  }};
