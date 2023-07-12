const axios = require('axios');

function getCharById(res, id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data)=>{
        const obj = {
            id:id,
            name:data.name,
            gender:data.gender,
            species:data.species,
            origin:data.origin.name,
            image:data.image,
            status:data.status
        }
        // console.log(obj);
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(obj))
    })
    .catch((error)=>{
        res.writeHead(500, {"Content-Type":"text/plain"})
        res.end(error.message)
    })
       

}

module.exports={
    getCharById
}