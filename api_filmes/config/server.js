const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.listen(port, function () {
	console.log('Servidor rodando com express na porta', port);
});

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

module.exports = app;