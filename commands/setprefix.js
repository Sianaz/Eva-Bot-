module.exports = {
  name: "setprefix",
  description: "Cambia el prefix de un servidor",
  execute(client, prefix, message, args) {
    const Discord = require('discord.js')
const db2 = require("megadb");
let prefixdb = new db2.crearDB("Prefixes");

let prefixchiquito = args.join(" ");
const NOEMBED = new MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar embeds en ${message.channel}`)
const NOMESSAGE = new MessageEmbed()
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

const NOPREFIX = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debes escribir un prefix")
.setColor("#EDE545")
if(!prefixchiquito) return message.channel.send(NOPREFIX);
const MUYPREFIX = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, El prefix debe de tener menos de 3 caracteres")
.setColor("#EDE545")
if(prefixchiquito.length > 3)return message.channel.send(MUYPREFIX)
const PREFIXIGUAL = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("¡Oh no!, El prefix es igual al actual")
.setColor("#EDE545")
if(prefix === args.join(" ")) return message.channel.send(PREFIXIGUAL)
const IDKERROR = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription("Ha ocurrido un error desconocido, no se pudo cambiar el prefix")
.setColor("#EDE545")
const YESPREFIX = new Discord.MessageEmbed()
.setTitle(":white_check_mark: - Perfecto")
.setDescription(`El prefix ha sido cambiado a \`${prefixchiquito}\``)
.setColor("#0CFF00")
const CAMBIANDOPREFIX = new Discord.MessageEmbed()
.setTitle("<a:Ping:734185154511372368> Cambiando prefix")
.setDescription("Espere un momento mientras se cambia el prefix")
.setColor("0CFF00")
message.channel.send(CAMBIANDOPREFIX).then(m => {

prefixdb.set(message.guild.id, prefixchiquito).catch((e) => {

m.edit(IDKERROR)
console.log(e.stack)
}).then(() => {
setTimeout(() => {
                m.edit(YESPREFIX)
            }, 10000)
})
})
  }
}