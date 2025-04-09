require('dotenv').config();
const WebSocket = require('ws');
const { createClient } = require('redis');

const PORT = process.env.PORT || 8080;
const redis = createClient({ url: process.env.REDIS_URL });

redis.connect().then(() => console.log("Redis conectado!"));

const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`Servidor WebSocket rodando na porta ${PORT}`);
});

wss.on('connection', (ws) => {
  console.log('Novo cliente conectado.');

  ws.on('message', async (msg) => {
    console.log(`Mensagem recebida: ${msg}`);
    await redis.publish('chat', msg.toString());
  });

  ws.send('Bem-vindo ao chat!');
});

redis.subscribe('chat', (message) => {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(`[Broadcast] ${message}`);
    }
  });
});
