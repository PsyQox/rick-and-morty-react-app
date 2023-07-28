const {Favorite} = require('../DB_connection');

const deleteFav = async (req,res)=>{
    const {id} = req.params
    try{
        const fav = await Favorite.findOne({where:{id:id}})
        await fav.destroy()
        const favorites = await Favorite.findAll();
        res.status(200).json(favorites)
    }catch(error){
        res.status(500).json(error.message)
    }
}

module.exports = deleteFav