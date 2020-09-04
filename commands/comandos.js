module.exports ={
  name: "comandos",
  execute(client, prefix, message, args) {
    const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
.setTitle("Categorias de Comandos")
.setDescription(`Usa \`${prefix}comandos <categoria>\` Para Ver los Comandos de las Categorias`)
const dosembed = new Discord.MessageEmbed()
.setTitle("PRUEBA")
const tresembed = new Discord.MessageEmbed()
.setTitle("PRUEBA")
message.channel.send(embed).then(msg => {
    msg.react('741705710697709619') 
    msg.react('741705731992191157')
    msg.react('741705769120170056') 
    msg.awaitReactions((reaction, user) => { 
        if (message.author.id !== user.id) return; 
        if (reaction.emoji.name === '<:EVA_1:741705710697709619>') { 
            msg.edit(embed)
        }
        if (reaction.emoji.name === '741705731992191157>') { 
            msg.edit(dosembed)
        }
    if (reaction.emoji.name === '<:EVA_3:741705769120170056>') {
      msg.edit(tresembed)
}

    })
});
  }
}