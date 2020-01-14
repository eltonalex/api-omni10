const Dev = require('../models/Dev');
const parseStringASArray = require('../utils/parseStringAsArray');

module.exports = {
        async index(request, response){
            //Buscar todos os Devs em um Raio de 10km e por tecnologia
            //console.log(request.query);
            const { latitude, longitude, techs } = request.query;

            const techsArray = parseStringASArray(techs);

            const devs = await Dev.find({
                techs: {
                    $in: techsArray,
                },
                location:{
                    $near: {
                        $geometry:{
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: 10000,
                    },
                },
            })

            return response.json({ devs });
        }
}