const connection = require('../databases/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
     
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const ong = await connection('ongs').insert({
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return response.json(ong);
    },

    async getIncidents(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    }
}