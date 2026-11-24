
const express = require('express');
const cors = require('cors');

const app = express();

// Habilita o CORS (Cross-Origin Resource Sharing).
// Permite que aplicações frontend executadas em origens diferentes
// (por exemplo, localhost:5500) façam requisições ao backend (localhost:3000).
// Sem essa configuração, o navegador pode bloquear as requisições.
app.use(cors());

// Rota GET
app.get('/api/mensagem', (request, response) => {
    const data = {mensagem: 'Olá! Mensagem recebida do servidor! ' + new Date()}
    console.log(data);
    response.json(data);
});

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor executando em http://localhost:3000');
});
