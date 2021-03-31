const axios = require('axios');

async function getAll(req, res){
    try {

        const { page, limit } = req.query;

        const limitNumber = Number.parseInt(limit);
        const data = await axios.default
            .get(`https://rickandmortyapi.com/api/character/?page=1`)
                .then(res => res.data)

                console.log(Number.parseInt(page) - 1);
        
        const newData = data.results.slice((Number.parseInt(page) - 1 ) * limit, (Number.parseInt(page) - 1 ) * limitNumber + limitNumber);

        const pages = Math.ceil(data.results.length / limitNumber);

        const info = {
            count: data.results.length,
            pages
        }


        return res.send({ data: newData, info })

    } catch (err){
       return res.send({ error: true, stack: err })
    }
}

async function getEp(req, res){
    try {
        const data = await axios.default
            .get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
                .then(res => res.data)

        const ids = [];

        data.episode.forEach(url => {
            ids.push(url.replace(/\D/gim, ''))
        })

        const epInfo = await axios.default
            .get(`https://rickandmortyapi.com/api/episode/${ids}`)
                .then(res => res.data)

        return res.send({ data: epInfo})

    } catch (err){
       return res.send({ error: true, stack: err })
    }
}

async function getSingle(req, res){
    try {
        const data = await axios.default
            .get(`https://rickandmortyapi.com/api/character/${req.params.id}`)
                .then(res => res.data)


        return res.send({ data })

    } catch (err){
       return res.send({ error: true, stack: err })
    }
}

 module.exports = {
    getAll,
    getEp,
    getSingle
}