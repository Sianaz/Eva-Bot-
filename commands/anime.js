module.exports = {
  name: "anime", 
  execute(client, prefix, message,args) {
    const {MessageEmbed} = require("discord.js")
const mal = require("mal-scraper")
const trans = require("@vitalets/google-translate-api")
    let busqueda = args.join(" ")
  const NOANIME = new MessageEmbed()
  .setTitle(":warning: - Error")
.setDescription("¡Oh no!, Debes introducir el nombre de un Anime a buscar")
.setColor("#EDE545")
 
    if(!busqueda) { return message.channel.send(NOANIME) }
    mal.getInfoFromName(busqueda).then((data) => {
      trans(data.synopsis, { from : "en", to: "es"}).then(res => {
      
      const embed = new MessageEmbed()
      .setColor("#6ACAED")
      .setDescription(`[${data.title}](${data.url}) \n\n\ **Sinopsis:** \n ${res.text}`)
      .setImage(data.picture)
      message.channel.send(embed)
    })
    })
  }
}