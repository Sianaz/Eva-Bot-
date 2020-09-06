const Discord = require('discord.js');
module.exports = {
	name: 'help',
	execute(client, prefix, message, args) {
		//EMBED'S
		const HELPEMBED = new Discord.MessageEmbed()
			.setTitle('Categorias de Comandos')
			.setDescription(
				`Usa \`${prefix}help <categoria>\` Para Ver los Comandos de las Categorias\n\n**config:** Las configuraciones del bot para cada servidor\n**busqueda:** Comandos de todo tipo de búsqueda`
			)
			.setColor('#6ACAED');
		const CONFIGEMBED = new Discord.MessageEmbed()
			.setTitle('Comandos de Configuración (3 Comandos)')
			.setDescription(
				`**${prefix}setleave** [Canal de despedidas]\n**${prefix}setwelcome** [Canal de Bienvenidas]\n**${prefix}setprefix** [Nuevo prefijo]`
			)
			.setColor('#6ACAED');
		if (args[0] == 'config') {
			message.channel.send(CONFIGEMBED);
		} else {
			message.channel.send(HELPEMBED);
		}
		message.author.send(
			`\`\`\`Para ayuda mas detallada mira los siguientes links: \`\`\`\n\n**Sitio Web:**\nProximamente\n\n**Soporte:**\nhttps://discord.gg/EQnEyNw\n\n**Donar:**\nhttps://patreon.com/EvaBot`
		);
	}
};
