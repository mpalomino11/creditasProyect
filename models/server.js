const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server{
    constructor(){
        this.app=express()
        this.port=process.env.PORT;
        
        this.paths = {
            cliente :      '/api/cliente'
        }

        // Conectar a base de datos 
        this.conectarDB()
        
        //middlewares
        this.middleware();

        //rutas de mi aplicacion
        this.routes();
    }

    async conectarDB(){
       await dbConnection()
    }

    middleware(){
        //cors 
        this.app.use(cors())

        // Lectura y parseo del body 
        this.app.use(express.json())

        ///directorio publico
        this.app.use(express.static('public'))
    }

    routes(){
        
        this.app.use(this.paths.cliente,require('../routes/cliente'))

        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log("servidor corriendo en puerto ", this.port);
        })
    }
}

module.exports=Server;