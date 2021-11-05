const {Schema,model} =require('mongoose')

const ClienteSchema= Schema({
    nombre:{
        type:String,
        required: [true,"el nombre es obligatorio"]
    },
    telefono:{
        type:String,
        required:[true,"el corre es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"la contraseña es requerida "]
    },
    rfc:{
        type:String
    },
    domicilio:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    }
});




module.exports=model('Cliente',ClienteSchema);