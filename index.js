// cSpell: ignore Usuarios, usuario, deleta

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

    //LISTAGEM USUÁRIOS
    app.get('/',(req,res)=>{
        Usuarios.findAll({order:[['id','DESC']]}).then((posts)=>{
            res.render('listagem',{posts: posts});
        }).catch();
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

    //DELETA USUARIO
    app.get('/delete/:id',(req, res)=>{
        Usuarios.destroy({where: {'id': req.params.id}}).then(()=>{
            res.redirect('/')
        }).catch((erro)=>{
            res.send("Usuario inexistente!!")
        });
    });

app.listen(5555, function(){
    console.log("SERVIDOR RODANDO!!");
});