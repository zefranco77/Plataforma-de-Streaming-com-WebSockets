# Plataforma de Streaming com WebSockets

Backend para uma plataforma de streaming com chat em tempo real utilizando WebSockets. O sistema usa Redis para escalar horizontalmente e PostgreSQL para persistência de mensagens.

## Tecnologias

- Node.js (Express)
- WebSocket nativo
- Redis (Pub/Sub)
- PostgreSQL
- dotenv

## Funcionalidades

- Conexão em tempo real com WebSockets
- Broadcast de mensagens para todos os clientes conectados
- Integração com Redis para múltiplas instâncias
- Persistência de mensagens em PostgreSQL (opcional)

## Como rodar

```bash
cp .env.example .env
npm install
node server/index.js
