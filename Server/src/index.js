const server = require("./app")
const {conn} = require('./DB_connection')
const PORT = 3001

server.listen(PORT, async ()=>{
    await conn.sync({force: true}) //alter: no elimina las tablas pero aplica los cambios hechos a los modelos, en cada sync altera las tbl y hace sus cambios 
    console.log(`Server listen on port ${PORT}`);
})

