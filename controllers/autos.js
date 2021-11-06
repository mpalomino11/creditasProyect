
const { response} = require("express");

const Auto= require('../models/auto') 

const createAuto = async(req,res=response)=>{

    const {modelo,precio,clienteId} = req.body;

    /// validar no duplicidad 

    /// validar el precio 
    let valor=false
    if(precio>200000 && precio <500000){
        valor=true
    }
    // crear en BD 
    const data = {
        modelo,precio,cliente:clienteId,estado:valor
    }

    const auto = new Auto(data)
    await auto.save();

    res.status(200).json({
        msg:"creado Auto",
        auto
    })
}

const getAtuo= async (req , res= response)=>{

    const query = {estado: true}

    const [total , auto] = await Promise.all([
        Auto.countDocuments(query),
        Auto.find(query)
        .populate('cliente','nombre')
    ])
    
    res.json({
        msg:"obteniendo Autos",
        auto,
        total
    })
}

module.exports={
    createAuto,
    getAtuo
}