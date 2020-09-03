//IMPORTA MODULO DE CONFIGURAÇÃO DO BANCO
const db = require('./db');

//MODEL USUARIOS
const Usuarios =  db.sequelize.define('usuarios',{
    nome: {
        type: db.Sequelize.TEXT
    },
    sobrenome: {
        type: db.Sequelize.TEXT
    },
    data_nascimento: {
        type: db.Sequelize.DATE
    },
    genero:{
        type: db.Sequelize.TEXT
    },
    email: {
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    ativo: {
        type: db.Sequelize.BOOLEAN
    }
});
/*
//SINCRONIZAR COM BANCO
Usuarios.sync({
    force: true
})
*/
module.exports = Usuarios;