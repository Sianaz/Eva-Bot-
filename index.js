const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('qe pasa larva'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const fs = require('fs');
const Discord = require('discord.js');
const marsnpm = require('marsnpm')
const db = require('quick.db')
const db2 = require("megadb");
let prefixdb = new db2.crearDB("Prefixes");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.on('ready', () => {
  console.log(`Soy ${client.user.username} Estoy Activo, ${client.guilds.cache.size} Servidores, ${client.users.cache.size} Usuarios`)
  //demasiao lagggg
  let statuses = ["e!help | ¡Agregame a tu servidor!", "e!help | https://discord.gg/EQnEyNw", "e!help | ¡No salgas de tu casa!"]
  setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status, {type: 'WATCHING'})}, 20000)
});
client.on('message', async message => {
  let prefix = prefixdb.has(message.guild.id) ? await prefixdb.get(message.guild.id) : "e!"
     if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
if(!client.commands.has(command)) return;
client.commands.get(command).execute(client, prefix, message, args)
});
client.on('guildMemberAdd', async member => {
  let canal = db.get(`welchannel_${member.guild.id}`)
  if(canal === null) {
    return;
  }
  let imagen = await marsnpm.happy()
  const embed = new Discord.MessageEmbed()
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .setTitle(`¡Tenemos un nuevo miembro!, Denle la Bienvenida a ${member.user.tag}`)
  .setImage(imagen)
  .setFooter(`Bienvenido a ${member.guild.name}`)
  .setTimestamp()
  .setColor("#6ACAED")
if(!canal)return;
client.channels.cache.get(canal).send(embed)
});
client.on('guildMemberRemove', async member => {
  let canal = db.get(`leavechannel_${member.guild.id}`)
  if(canal === null) {
    return;
  }
  let imagen = await marsnpm.cry()
  const embed = new Discord.MessageEmbed()
  .setThumbnail(member.user.avatarURL({dynamic: true}))
  .setTitle(`¡Oh no!, ${member.user.tag} Se ha ido del servidor :(`)
  .setImage(imagen)
  .setFooter(`${member.user.tag} Vuelve pronto :(`)
  .setTimestamp()
  .setColor("#6ACAED")
if(!canal)return;
client.channels.cache.get(canal).send(embed)
});
client.login(process.env.DISCORD_TOKEN)
//si funca xd