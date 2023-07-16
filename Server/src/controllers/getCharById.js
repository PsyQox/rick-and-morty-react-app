const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/'



const getCharById = (req,res)=>{
    axios(URL + req.params.id) //req.params.id
    .then((response) => {
        const {data} = response
        if (data) {
            const objChar={
                id:data.id,
                name:data.name,
                gender:data.gender,
                species:data.species,
                origin:data.origin,
                image:data.image,
                status:data.status
            }
            return res.json(objChar)

        }else{
            return res.status(404).send("Not Fount")
        }

    })
    .catch(error => {
        res.status(500)
        res.send(error.message)
    })
}



















// function getCharById(res, id){
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => response.data)
//     .then((data)=>{
//         const obj = {
//             id:id,
//             name:data.name,
//             gender:data.gender,
//             species:data.species,
//             origin:data.origin,
//             image:data.image,
//             status:data.status
//         }
//         // console.log(obj);
//         res.writeHead(200, {"Content-Type":"application/json"})
//         res.end(JSON.stringify(obj))
//     })
//     .catch((error)=>{
//         res.writeHead(404, {"Content-Type":"text/plain"})
//         res.end(error.message)
//     })
       

// }

module.exports={
    getCharById
}