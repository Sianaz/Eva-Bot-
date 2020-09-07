module.exports = {
  name: "welcome",
  description: "una prueba de la imagen de bienvenida",
  aliases: ["w"],
  async execute(client, prefix, message, args) {
    const Discord = require('discord.js')
const Canvas = require('canvas')
Canvas.registerFont('./uni-sans.heavy-caps.otf', { family: 'Uni'})
   const canvas = Canvas.createCanvas(736, 412)
    const ctx = canvas.getContext('2d')
    const bg = await Canvas.loadImage('./WELCOME.png')
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
let avatar = message.member.user.avatarURL({size: 128, format: 'png'})

    ctx.font = '47px Uni'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText(`Bienvenido a ${message.guild.name}`, canvas.width/2, 60)

    ctx.font = '43px Uni'
    ctx.fillStyle = '#fff'
    ctx.textAlign = 'center'
    ctx.fillText(`${message.member.user.tag}`, canvas.width/2, +379)
    ctx.beginPath()
  

    const y= 100, radio= 85, x=canvas.width/2-radio

ctx.beginPath()
ctx.arc(canvas.width/2, 185, 90, 0, Math.PI * 2)
ctx.fillStyle = "#fff"
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.save()
ctx.beginPath()
ctx.arc(canvas.width/2, 185, 85, 0, Math.PI * 2, true)
ctx.fillStyle = "#fff"
ctx.closePath()
ctx.clip()

        let imagen = await Canvas.loadImage(avatar)
    ctx.drawImage(imagen, x, y, radio*2, radio*2)
    let img = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png')
  const embed = new Discord.MessageEmbed()
 .attachFiles(img)
  .setThumbnail(message.member.user.avatarURL({dynamic: true}))
  .setTitle(`¡Tenemos un nuevo miembro!, Denle la Bienvenida a ${message.member.user.tag}`)
  .setFooter(`Bienvenido a ${message.guild.name}`)
 .setImage("attachment://welcome.png")
  .setTimestamp()
  .setColor("#6ACAED")
  message.channel.send(embed)
  }
}