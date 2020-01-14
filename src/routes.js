const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const routes = Router();

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

//Query Params: exemplo: http://localhost:3333/users?search=Elton | Acessando: request.query (Identifica filtros, ordenação, paginação, ...)
//Route Params: exemplo: http://localhost:3333/users/1 | Acessando: request.params (Identifica um recurso na alteração ou remoção)
//Body: Params: exemplo: http://localhost:3333/users | Acessando: request.body (Dados para criação ou alteração de um registro)

routes.get('/',(request, response) =>{

    //return response.send('Olá mundo');
    return response.json({message:'Olá mundo Novo!'});

})

//Devs
routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

//search
routes.get('/search', SearchController.index)


//Users
routes.get('/users',(request, response) =>{

    //return response.send('Olá mundo');
    console.log(request.query);
    return response.json({message:'Olá Usuário!'});

})

routes.post('/users/',(request, response) =>{

    console.log(request.body);
    return response.json({message:'Enviando dados do Usuário!'});

})

routes.put('/users/:id',(request, response) =>{

    //return response.send('Olá mundo');
    console.log(request.body);
    return response.json({message:'Alterando o Usuário!'});

})

routes.put('/users/:id',(request, response) =>{

    //return response.send('Olá mundo');
    console.log(request.params);
    return response.json({message:'Alterando o Usuário!'});

})

routes.delete('/users/:id',(request, response) =>{

    //return response.send('Olá mundo');
    console.log(request.params);
    return response.json({message:'Excluindo o Usuário!'});

})

module.exports = routes;