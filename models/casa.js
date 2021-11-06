const {Schema,model} =require('mongoose')

const CasaSchema= Schema({
    domicilio:{
        type:String,
        required: [true,"el domicilio es obligatorio"]
    },
    valor:{
        type:Number,
        required:[true,"el corre es obligatorio"]
    },
    lat:{
        type:String,
        required:[true,"la latitud es obligatorio"]
    },
    long:{
        type:String,
        required:[true,"la long es obligatorio"]
    },
    cliente:{
        type:Schema.Types.ObjectId,
        ref:'Cliente',
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    }
});




module.exports=model('Auto',CasaSchema);