const {Schema,model} =require('mongoose')

const NominaSchema= Schema({
    nombreEmpresa:{
        type:String,
        required: [true,"el nombre de la empresa es obligatorio"]
    },
    fechaIngreso:{
        type:Number,
        required:[true,"el corre es obligatorio"]
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




module.exports=model('Auto',NominaSchema);