const {Favorite} = require('../DB_connection');

const postFav = async (req,res)=>{
    const {id,name,origin,status,image,species,gender} = req.body
    if(!id||!name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos")
    
    try {
        await Favorite.findOrCreate({where: {id:id},defaults:{
            name:name,
            origin:origin,
            status:status,
            image:image,
            species:species,    
            gender:gender
        }})
        const favorites = await Favorite.findAll();
       return res.status(200).json(favorites)
    } catch (error) {
        return res.status(500).json(error.message)
    }
    
}

module.exports = postFav