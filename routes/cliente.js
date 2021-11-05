const {Router} =require('express');
const { check } = require('express-validator');
const { createCliente,getCliente ,createAuto} = require('../controllers/cliente');
const { validarCampos } = require('../middlewares/validar-campos');

const router =Router();

// obtener todos los usuarios  
router.get('/user', getCliente)

router.post('/user',[
    check('nombre','El nombre es obligatorio ').not().isEmpty(),
    check('telefono','El telefono es obligatoria ').not().isEmpty(),
    check('email','el correo no es un correo correcto').isEmail(),
    check('rfc','Es requerido un rfc').not().isEmpty(),
    check('domicilio','es necesario un domicilio').not().isEmpty(),
    validarCampos
], createCliente)

router.post('/auto',[
    check('modelo','El modelo es obligatorio ').not().isEmpty(),
    check('precio','El modelo es obligatorio ').not().isEmpty(),
    check('clienteId','El idCliente no es valido ').isMongoId(),
    validarCampos
],createAuto)




module.exports=router