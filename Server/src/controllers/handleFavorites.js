var myFavorites = []

function postFav(req,res){
   myFavorites.push(req.body)
   return res.json(myFavorites)
}

function deleteFav(req,res){
    const {id} = req.params
    const newFavorites = myFavorites.filter((fav) => fav.id !== +id )
    myFavorites = newFavorites
    console.log(myFavorites)
    return res.json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}