const {Schema,model} =require('mongoose')

const AutoSchema= Schema({
    modelo:{
        type:String,
        required: [true,"el model es obligatorio"]
    },
    precio:{
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




module.exports=model('Auto',AutoSchema);