const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringASArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response){
    
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({github_username});

        if(!dev){

            //a função map varre o array
            const techsArray = parseStringASArray(techs);

            //Criando a variável de geolocalização
            const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
            }

            //api pode demorar a trazer um resultado
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);    
            //console.log(apiResponse.data);

            const{ name = login, avatar_url, bio } = apiResponse.data;

             dev =  await Dev.create({
                                                github_username,
                                                name,
                                                avatar_url,
                                                bio,
                                                techs: techsArray,
                                                location,
                                         })

        }       

        //console.log(name, avatar_url, bio, github_username, techs)
        return response.json({message:`Enviando dados do Usuário! ${dev}`});
    
    },

    async update(){
        //Falta implementar
        //não atualizar o github_username

    },

    async destroy(){
        //Falta implementar
    },


}
