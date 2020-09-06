module.exports = {
  name: "eval",
  aliases: ["e", "evalua"], 
async execute(client, prefix, message, args) {
  const Discord = require('discord.js')
  if(!["654158118137233428", "598550433421590544"].includes(message.author.id)) return;
    //if(message.author.id !== ["654158118137233428", "598550433421590544"]) return 
    let code = args.join(' ')
    if(!code) return;
    try{
     let evaluado = await eval(code);
  let tipo = typeof(evaluado)
  let resultado = require("util").inspect(evaluado, { depth: 0 });
const NOEMBED = new Discord.MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar embeds en ${message.channel}`)
const NOMESSAGE = new Discord. MessageEmbed()
.setTitle(":warning: - Error")
.setDescription(`¡Oh no!, Debo tener permisos de enviar mensajes en ${message.channel}`)
.setColor("#EDE545")
if(!message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) return message.author.send(NOEMBED)
if(!message.channel.permissionsFor(message.guild.me).has('SEND_MESSAGES')) return message.author.send(NOMESSAGE)
 
const embed1 = new Discord.MessageEmbed()
.addField("Tipo", `\`\`\`js\n${tipo}\`\`\``)
.addField("Entrada", `\`\`\`js\n${args.join(' ')}\`\`\``)
.addField("Salida", `\`\`\`js\n${resultado.slice(0, 1024).replace(client.token, 'qe pasa larva')}\`\`\``)
.setTimestamp()
.setFooter(message.member.user.tag,  message.author.displayAvatarURL())
.setColor("#6ACAED")
message.channel.send(embed1)

  } catch(err) {
    const embed2 = new Discord.MessageEmbed()
     .setTitle('Error')
     .setTimestamp()
        .setColor('ff0000')
        .addField("Codigo", `\`\`\`js\n${code}\`\`\``)
        .setFooter(message.member.user.tag,  message.author.displayAvatarURL())
    .addField("Error", `\`\`\`js\n${err}\`\`\``)
    message.channel.send(embed2)
    
     }
  }
}