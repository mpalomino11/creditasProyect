const { response, json } = require("express");
const bcryptjs = require('bcryptjs')

const Cliente= require('../models/clientes') 

//const Usuario = require('../models/usuario');

const getCliente= async(req,res=response)=>{
    
    const query = {estado: true}
    const [total , clientes] = await Promise.all([
        Cliente.countDocuments(query),
        Cliente.find(query)
    ])
    res.status(400).json({
        total,
        clientes,
        msg:"getCliente"
    })

}

const createCliente= async(req,res=response)=>{
    const {nombre,telefono,email,rfc,domicilio} = req.body;

    /// validar no duplicidad 
    const clienteBD = Cliente.findOne({nombre});
    
    if(clienteBD){
        return res.status(400).json({
            msg : `El Cliente ${nombre} ,  ya existe`
        })
    }

    const data = {
        nombre,
        telefono,
        email,
        rfc,
        domicilio
    }

    // crear en BD 
    const cliente= new Cliente(data)

    await cliente.save();

    res.status(400).json({
        msg:"creando",
        cliente,
        nombre,telefono,email,rfc,domicilio
    })

}

const createAuto = async(req,res=response)=>{
    res.status(200).json({
        msg:"creado Auto"
    })
}

module.exports={
    createCliente,
    getCliente,
    createAuto
}