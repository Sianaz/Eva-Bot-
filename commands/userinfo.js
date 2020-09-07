const Discord = require('discord.js')
module.exports = {
    name: "userinfo",
    description: "da informacion sobre el usuario",
    aliases: ["u-i"],
    execute(client, prefix, message, args) {
      const NOEMBED = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar embeds en ${message.channel}`)
const NOMESSAGE = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar mensajes en ${message.channel}`)
.setColor("#EDE545")
if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return message.author.send(NOEMBED)
if(!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.author.send(NOMESSAGE)
 
			//aliases: [""],
 const badges = {
     DISCORD_PARTNER: '<:EVA_PARTNER:741710054880706631>',
     HYPESQUAD_EVENTS: '<a:EVA_HYPESQUADEVENTS:742808329209905332>',
     BUGHUNTER_LEVEL_1: '<:EVA_BUGHUNTER:741710105329795103>',
     HOUSE_BRAVERY: '<:EVA_BRAVERY:741710146895347713>',
     HOUSE_BRILLIANCE: '<:EVA_BRILLIANCE:741710237026877510>',
     HOUSE_BALANCE: '<:EVA_BALANCE:741710125823164647>',
     EARLY_SUPPORTER: '<:EVA_DISCORDNITROOLD:741710082621964319>',
     BUGHUNTER_LEVEL_2: '<:EVA_BUGHUNTERLVL2:742808961115226193>',
     VERIFIED_DEVELOPER: '<:EVA_VERIFIEDDEV:741710352823353354>'
     
 }
 
 const PRESENCIA = {
     online : "<a:emoji_45:739928097251655690> Conectado.",
     idle : "<a:emoji_48:739928175735472128> Ausente.",
     dnd : "<a:emoji_47:739928148266975273> No molestar.",
     offline : "<a:emoji_46:739928121918357604> Desconectado/Invisible."
 }


function dias(date) {
                
    let now = new Date();
    let a = now.getTime() - date.getTime()
    let e = Math.floor(a / 86400000)
    return `**${e == 0 ? "Hoy**" : e.toLocaleString() + (e== 1 ? "** Hace un dia" : "** Dias")}`
}
//.toArray().length
 
    let user =  message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
const presenciarikolina = PRESENCIA[user.presence.status]
//user.flags ? (user.flags.toArray().map(...).join(", ") || "Ninguna") : "Ninguna"
//user.flags.toArray().length ? user.flags.toArray().map(b => BADGES[b]).join(' , ') : "No tiene insignias"
const eribot = user.bot ? "Si" : "No"
const customstatus = user.presence.activities[0] ? user.presence.activities[0].state : "Nada"
var rles;
if(user.roles.cache.size < 5) {
rles= user.roles.cache.map(x => `<@&${x.id}>`).join(" | ")
} else {
rles = user.roles.cache.map(x => `<@&${x.id}>`).slice(0, 5).join(" | ") + ` +${user.roles.cache.size-1}`
}
const embedsinmencion = new Discord.MessageEmbed()
.setThumbnail(user.avatarURL())
 .setTitle(`Informacion sobre ${user.username}`)
 .addField("Nombre y Discriminador", user.tag)
 .addField("ID", user.id)
 .addField("Bot?", eribot)
 .addField("Estado", presenciarikolina)
 .addField("Estado personalizado", customstatus)
 .addField("Creacion de la cuenta", `Hace ${dias(user.createdAt)}`)
 .addField("Entrada al servidor", `Hace ${dias(message.guild.member(user).joinedAt)}`)
 .addField('Insignias', `${user.flags.toArray().length < 1 ? `No tiene` : user.flags.toArray().map(e => badges[e]).join(' ')}`, true)
 .setColor("YELLOW")
 message.channel.send(embedsinmencion)

}} 
