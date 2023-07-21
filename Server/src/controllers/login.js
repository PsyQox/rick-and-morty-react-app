const credenciales =  require('../utils/users')

const login = (req,res)=>{
    const {email, password} = req.query;
    credenciales.forEach(user => {
        if (email === user.email && password === user.password) {
            return res.status(200).json({access:true})
        }else{
            return res.status(200).json({access:false})
        }
    })
}


module.exports = login