const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});

client.on('message_create', message => {
	if (message.body === 'hi') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Welcome to KraftNexus, where innovation meets excellence!');
	}
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();
