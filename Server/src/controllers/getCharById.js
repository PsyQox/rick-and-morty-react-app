const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/'



const getCharById = async (req,res)=>{
    try {
        const {data} = await axios(URL + req.params.id) //req.params.id      
        if (data.error) {
            return res.status(404).send("Not Fount")
        }else{
            const objChar={
                id: Number(data.id),
                name:data.name,
                gender:data.gender,
                species:data.species,
                origin:data.origin,
                image:data.image,
                status:data.status
            }
            return res.json(objChar)
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
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