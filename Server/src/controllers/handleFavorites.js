var myFavorites = []

function postFav(req,res){
   myFavorites.push(req.body)
   return res.json(myFavorites)
}

function deleteFav(req,res){
    const {id} = req.params
    const newFavorites = myFavorites.filter((fav) => fav.id !== +id )
    myFavorites = newFavorites
    return res.json(myFavorites)
}

function getFav(){
    return myFavorites
}

module.exports={
    postFav,
    deleteFav,
    getFav
}