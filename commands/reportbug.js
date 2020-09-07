module.exports = {
  name: "reportbug",
  description: "REPORTA EL BUG",
  execute(client, prefix, message, args) {
    const Discord = require('discord.js')
    const bug = args.join(" ").split(" | ")
    const NOEMBED = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar embeds en ${message.channel}`)
const NOMESSAGE = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar mensajes en ${message.channel}`)
.setColor("#EDE545")
if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return message.author.send(NOEMBED)
if(!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.author.send(NOMESSAGE)
 
    const ERRORBUG0 = new Discord.MessageEmbed()
    .setTitle(":warning: - Error")
    .setDescription("¡Oh no!, Debes introducir una Razon")
    .setFooter(`Uso: ${prefix}reportbug Razon | Prueba(Link de foto)`) 
    .setColor("#EDE545")
    if(!bug[0])return message.channel.send(ERRORBUG0)
            const ERRORBUG2 = new Discord.MessageEmbed()
    .setTitle(":warning: - Error")
    .setDescription("¡Oh no!, Debes introducir una prueba")
    .setFooter(`Uso: ${prefix}reportbug Razon | Prueba(Link de foto)`)
     .setColor("#EDE545")
    if(!args[1])return message.channel.send(ERRORBUG2)
    try {
new URL(args[2])
  const REPORTBUGEMBED = new Discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setTitle("¡Nuevo Bug Registrado!")
        .addField(":test_tube: Bug:", bug[0])
        .addField(":shield: Pruebas del Bug:", `[Click Aqui](${args[2]})`)
        .addField(":bust_in_silhouette: Autor", message.author.tag)
        .addField(":tools: Servidor", message.guild.name)
        .setImage(args[2])
        .setColor("#0CFF00")
client.channels.cache.get('751217212156543067').send(REPORTBUGEMBED)
client.channels.cache.get('751217212156543067').send("<@654158118137233428>")
message.channel.send("Tu reporte ha sido enviado :white_check_mark:")
}catch(e){
        const ERRORBUG1 = new Discord.MessageEmbed()
    .setTitle(":warning: - Error")
    .setDescription("¡Oh no!, el segundo argumento debe ser un link ej `https://cdn.discordapp.com/attachments/`")
    .setFooter(`Uso: ${prefix}reportbug Razon | Prueba(Link de foto)`)
    .setColor("#EDE545")
    message.channel.send(ERRORBUG1)
}

  }
}