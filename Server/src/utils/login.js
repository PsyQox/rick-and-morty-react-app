const {User} = require('../DB_connection');

const login = async (req,res)=>{
    const {email,password} = req.query
    if (!email || !password)  res.status(400).send("Faltan datos")
    try {
        const user = await User.findOne({where:{email:email}})
        if (!user) res.status(404).send("Usuario no encontrado")
        if (user.password === password) {
            res.status(200).json({access:true})   
        }else{
            res.status(403).send("Contraseña incorrecta")
        }
    } catch (error) {
        
    }
}

module.exports = login