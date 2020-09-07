module.exports = {
  name: "eval",
  aliases: ["e", "evalua"], 
async execute(client, prefix, message, args) {
  /* const Discord = require('discord.js')
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
     */
    const Discord = require('discord.js')
    const Util = require('util')

 if (!"654158118137233428".includes(message.author.id)) return;
    if(!args[0]) return;
 
    try {
        
    let output = await eval(args.join(' '));
    let type = typeof output;
    if (typeof output !== 'string') {
    output = Util.inspect(output, { depth: 0 });
                
    }
                
    if (output.length >= 1020) {
        output = `${output.substr(0, 1010)}...`;
    }
                
    let embed2 = new Discord.MessageEmbed()
    .setAuthor('Evaluacion Correcta! '+message.author.tag , message.author.displayAvatarURL({ size: 2048, dynamic: true, format: 'png'}))
    .addField('Evaluado en', `\`\`\`yaml\n${client.ws.ping}ms\n\`\`\``, true)
    .addField('Tipo', `\`\`\`prolog\n${type.substring(0, 1).toUpperCase() + type.substring(1)}\n\`\`\``, true)
    .addField('Entrada', `\`\`\`js\n${args.join(' ')}\n\`\`\``)
    .addField('Salida', `\`\`\`js\n${output.replace(client.token, 'qe pasa larva')}\n\`\`\``)
    .setColor('RANDOM')
    message.channel.send(embed2)
                
    } catch (err) {
                
    let embed3 = new Discord.MessageEmbed()
    .setAuthor('Ups... Hubo un Error '+ message.author.tag, message.author.displayAvatarURL({ size: 2048, dynamic: true, format: 'png'}))
    .addField('Tipo', `\`\`\`prolog\n${err.name}\n\`\`\``, true)
    .addField('Error', `\`\`\`js\n${err.message}\n\`\`\``, true)
    .setColor('RANDOM')
    message.channel.send(embed3)
    }
  }
}