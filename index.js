//MÓDULOS
    //IMPORTA EXPRESS
    const express = require('express');
    //IMPORTA HANDLEBARS
    const handlebars = require('express-handlebars');

    //INSTÂNCIA DO EXPRESS 
    const app = new express;

//CONFIG
    //TEMPLATE ENGINE
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');


//ROTAS

app.get('/cadastro', (req, res)=>{
    res.render('cadastro')
})
app.listen(5555, function(){
    console.log("SERVIDOR RODANDO!!");
});