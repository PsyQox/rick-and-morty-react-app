const [credenciales] =  require('../utils/users')

const login = (req,res)=>{
    const {email, password} = req.query;
    if (email === credenciales.email && password === credenciales.password) {
        console.log("paso");
        return res.status(200).json({access:true})
    }else{
        return res.status(200).json({access:false})
    }
}


module.exports = login