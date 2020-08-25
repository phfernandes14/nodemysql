//IMPORTA O SEQUELIZE
const Sequelize = require('sequelize');

//INSTANCIA SEQUELIZE -- ARGUMENTOS: NOME DO BANCO, USER , PASSWORD 
const sequelize = new Sequelize('nodemysql', 'root', 'master123',{
    host: "localhost",
    dialect: "mysql"
});

//TESTE DE CONEXAO
sequelize.authenticate().then(function(){
    console.log("MYSQL CONECTADO COM NODE!!!");
}).catch(function(erro){
    console.log("FALHA AO SE CONECTAR COM O MYSQL!" + erro);
});

//EXPORTAR MODULO
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};