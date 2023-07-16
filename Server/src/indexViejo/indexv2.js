const http = require("http");
// const data = require("./utils/data")
const {getCharById} = require("./controllers/getCharById")


http.createServer((req,res)=> {
    res.setHeader("Access-Control-Allow-Origin", '*');

    const {url} = req
    const urlSplit = url.split('/')
    const id = urlSplit[urlSplit.length-1]

    if (url.includes("/rickandmorty/character/")) {
        // console.log(id);
        return getCharById(res, id) 
    }

    res.writeHead(404)
    res.end()

}).listen(3001,"localhost") 

//Nodemon sirve para resfrescar el servidor //Se puede utilizar el .env para datos privados que no se quieren tener el el archivo => PORT=3001, tener el gitignore puedes tener lo que no quieres que se suba a github

//Crear el .env con las variables de entorno => PASSWORD = "qweqwk" 
// npm install dotenv 
//En el archivo donde se necesite se requiere el doenv => const dotenv = require("dotenv")   dotenv.config()
// Se guardan en process seria => process.env.{nombre de variable}
//at es para quedarse con alguna posision del arrglo, si se empieza por ejemplo en negativo -1 se queda con el ultimo, porque empieza de derecha a izquierda