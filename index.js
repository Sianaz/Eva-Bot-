const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('qe pasa larva'));

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
const fs = require('fs');
const Discord = require('discord.js');
const marsnpm = require('marsnpm');
const db = require('quick.db');
const db2 = require('megadb');
let prefixdb = new db2.crearDB('Prefixes');
const Zeew = require('zeew');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
	.readdirSync('./commands')
	.filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('ready', () => {
	console.log(
		`Soy ${client.user.username} Estoy Activo, ${
			client.guilds.cache.size
		} Servidores, ${client.users.cache.size} Usuarios`
	);
	//demasiao lagggg
	let statuses = [
		'e!help | ¡Agregame a tu servidor!',
		'e!help | https://discord.gg/EQnEyNw',
		'e!help | ¡No salgas de tu casa!'
	];
	setInterval(function() {
		let status = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setActivity(status, { type: 'WATCHING' });
	}, 20000);
});

client.on('message', async message => {
	let prefix = prefixdb.has(message.guild.id)
		? await prefixdb.get(message.guild.id)
		: 'e!';
	if (message.author.bot) return;
	const MENCIONABB = new Discord.MessageEmbed()
		.setDescription(
			`!Que onda **${message.author.tag}**!, Mi prefix en **${
				message.guild.name
			}** es \`${prefix}\``
		)
		.setColor('#6ACAED');
	if (
		message.content === `<@${client.user.id}>` ||
		message.content === `<@!${client.user.id}>`
	) {
		message.channel.send(MENCIONABB);
		return;
	}

	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	//client.commands.get(command).execute(client, prefix, message, arme) && client.comandos.find(x => x.alias.includes(client, prefix, message, args))
	//client.commands.get(command).execute(client, prefix, message, args)

	let cmd =
		client.commands.get(command) ||
		client.commands.find(c => c.aliases && c.aliases.includes(command));
	if (!cmd) return;
	cmd.execute(client, prefix, message, args);
});
client.on('guildMemberAdd', async member => {
	let canal = db.get(`welchannel_${member.guild.id}`);
	if (canal === null) {
		return;
	}
  //uni-sans.heavy-caps.otf
	const Canvas = require('canvas');
	Canvas.registerFont('./Fuentes/uni-sans.heavy-caps.otf', { family: 'Uni' });

	const canvas = Canvas.createCanvas(736, 291);
	const ctx = canvas.getContext('2d');
	const bg = await Canvas.loadImage('./WELCOME.png');
	ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
	let avatar = member.user.avatarURL({ size: 128, format: 'png' });

ctx.font = '20px Uni';
	ctx.fillStyle = '#fff';
	ctx.textAlign = 'left';
	ctx.fillText(`Welcome to`, canvas.width / 3.5, 150);
	
	ctx.font = '40px Uni';
	ctx.fillStyle = '#fff';
	ctx.textAlign = 'left';
  ctx.strokeText(`${member.guild.name}`, canvas.width / 3.5, 185.5)
	ctx.fillText(`${member.guild.name}`, canvas.width / 3.5, 185.5);


	ctx.font = '43px Uni';
	ctx.fillStyle = '#fff';
	ctx.textAlign = 'center';
	ctx.fillText(`${member.user.tag}`, canvas.width / 2, +379);
	ctx.strokeText(`${member.user.tag}`, canvas.width / 2, +379);
	ctx.beginPath();

	const y = 100,
		radio = 85,
		x = canvas.width / 2 - radio;
ctx.beginPath()
ctx.arc(canvas.width/6.5, 170, 90, 0, Math.PI * 2)
ctx.fillStyle = "#fff"
ctx.fill()
ctx.stroke()
ctx.closePath()

ctx.save()
ctx.beginPath()
ctx.arc(canvas.width/6.5, 170, 83.2, 0, Math.PI * 2, true)
ctx.fillStyle = "#fff"
ctx.closePath()
ctx.clip()

	let imagen = await Canvas.loadImage(avatar);
	ctx.drawImage(imagen, canvas.width/35, 80, 175, 175);
	let img = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome.png');
	const embed = new Discord.MessageEmbed()
		.attachFiles(img)
		.setTitle(
			`¡Tenemos un nuevo miembro!, Denle la Bienvenida a ${member.user.tag}`
		)
		.setFooter(`Bienvenido a ${member.guild.name}`)
		.setImage('attachment://welcome.png')
		.setTimestamp()
		.setColor('#6ACAED');
	if (!client.channels.cache.get(canal)) return;
	if (!canal) return;
	client.channels.cache.get(canal).send(embed);
});
client.on('guildMemberRemove', async member => {
	let canal = db.get(`leavechannel_${member.guild.id}`);
	if (canal === null) {
		return;
	}
	let imagen = await marsnpm.cry();
	const embed = new Discord.MessageEmbed()
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.setTitle(`¡Oh no!, ${member.user.tag} Se ha ido del servidor :(`)
		.setImage(imagen)
		.setFooter(`${member.user.tag} Vuelve pronto :(`)
		.setTimestamp()
		.setColor('#6ACAED');
	if (!client.channels.cache.get(canal)) return;

	if (!canal) return;
	client.channels.cache.get(canal).send(embed);
});
client.login(process.env.DISCORD_TOKEN);
//si funca xd
