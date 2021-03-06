module.exports = {
  name: "google", 
  execute(cliente, prefix, message, args) {
    const { MessageEmbed } = require("discord.js")
const google = require("google-it")
    let busqueda = args.join(" ")
    const NOEMBED = new MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar embeds en ${message.channel}`)
const NOMESSAGE = new MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar mensajes en ${message.channel}`)
.setColor("#EDE545")
if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return message.author.send(NOEMBED)
if(!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.author.send(NOMESSAGE)
 
 const NOANIME = new MessageEmbed()
  .setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debes introducir algo a buscar en google")
.setColor("#EDE545")
    if(!busqueda) { return message.channel.send(NOANIME) }
    try{
      google({'query': busqueda}).then(results => {
        const embed = new MessageEmbed()
        .setColor("#6ACAED")
        .setTitle(`:mag_right: ${busqueda}`)
        .setDescription(`1.- [${results[0].title}](${results[0].link}) \n ${results[0].snippet} \n\n 2.- [${results[1].title}](${results[1].link}) \n ${results[1].snippet} \n\n 3.- [${results[2].title}](${results[2].link}) \n ${results[2].snippet}`)
        .setFooter(`Pedido por ${message.member.displayName}`, message.author.displayAvatarURL())
        message.channel.send(embed)
      })
    } catch(error) {
      console.log(error.message)
    }
  }
}