const mongoose= require('mongoose')

const dbConnection = async()=>{
    try {
        console.log("conectando .... .... ...");
        console.log("",process.env.MONGO_CNN);
        await mongoose.connect(process.env.MONGO_CNN,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("base de datos online");

    } catch (error) {
        console.log(error);
        throw new Error('error a la hora de inicia la base de datos')
    }
}

module.exports={
    dbConnection
}