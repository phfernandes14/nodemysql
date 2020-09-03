//MÓDULOS
    //IMPORTA EXPRESS
    const express = require('express');
    //IMPORTA HANDLEBARS
    const handlebars = require('express-handlebars');
    //IMPORTA BODY-PARSER
    const bodyParser = require('body-parser');
    //IMPORTA MODEL USUÁRIOS
    const Usuarios = require('./models/Usuarios');

    //INSTÂNCIA DO EXPRESS 
    const app = new express;

//CONFIG
    //TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    
        //BODY-PARSER
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());

//ROTAS

    //RENDERIZA VIEW CADASTRO
    app.get('/cadastro', (req, res)=>{
        res.render('cadastro');
    });

    //POST USUÁRIOS
    app.post('/add', (req, res)=>{
        Usuarios.create({
            nome:req.body.nome,
            sobrenome: req.body.sobrenome,
            data_nascimento: req.body.data_nascimento,
            genero: req.body.genero,
            email: req.body.email,
            telefone: req.body.telefone,
            ativo:req.body.ativo
        });
        res.send(req.body);
    });

app.listen(5555, function(){
    console.log("SERVIDOR RODANDO!!");
});