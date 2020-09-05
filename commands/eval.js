module.exports = {
  name: "e", 
async execute(client, prefix, message, args) {
  const Discord = require('discord.js')
    if(message.author.id !== "654158118137233428") return;
    let code = args.join(' ')
    if(!code) return;
    try{
     let evaluado = await eval(code);
  let tipo = typeof(evaluado)
  let resultado = require("util").inspect(evaluado, { depth: 0 });

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