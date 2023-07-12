const http = require("http");
// const data = require("./utils/data")


http.createServer((req,res)=> {
    res.setHeader("Access-Control-Allow-Origin", '*');
    // console.log(req);

    const {url} = req
    const urlSplit = url.split('/')
    const id = urlSplit[urlSplit.length-1]

    if (url === `/rickandmorty/character/${id}`) {
        res.writeHead(200,{"Content-Type":"application/json"})
        // const characters = [{id: 1, nombre:"Luis"},{id:2, name:"Keydens"}]
        const character = data.filter((char) =>  char.id == id) //se puede hacer con find <- que devuelve un elemento
        return res.end(JSON.stringify(character[0]))    
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