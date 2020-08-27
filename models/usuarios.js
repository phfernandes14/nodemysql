//IMPORTA MODULO DE CONFIGURAÇÃO DO BANCO
const db = require('./db');

//MODEL USUARIOS
const Usuarios =  db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    idade: {
        type: db.Sequelize.INTEGER
    },
    genero:{
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.TEXT
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    ativo: {
        type: db.Sequelize.BOOLEAN
    }
});

//SINCRONIZAR COM BANCO
Usuarios.sync({
    force: true
})