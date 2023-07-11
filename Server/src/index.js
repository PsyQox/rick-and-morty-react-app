const http = require("http");
const data = require("./utils/data")

http.createServer((req,res)=> {
    res.setHeader("Access-Control-Allow-Origin", '*');
    // console.log(req);

    const {url} = req
    const urlSplit = url.split('/')
    const id = urlSplit[urlSplit.length-1]

    if (url === `/rickandmorty/character/${id}`) {
        res.writeHead(200,{"Content-Type":"application/json"})
        // const characters = [{id: 1, nombre:"Luis"},{id:2, name:"Keydens"}]
        const character = data.filter((char) =>  char.id == id)
        return res.end(JSON.stringify(character[0]))    
    }

    res.writeHead(404)
    res.end()

}).listen(3001,"localhost")