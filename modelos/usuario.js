var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var rolesValidados = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol permitido'
}

var usuarioSchema = new Schema({
nombre : {type: String, required: [true, 'El nombre es necesario']},
email : {type: String, unique:true, required: [true, 'El email es necesario']},
password : {type: String, required: [true, 'La contraseña es necesaria']},
img : {type: String,required: false},
role : {type: String, required: true, default:'USER_ROLE', enum: rolesValidados}
});

usuarioSchema.plugin(uniqueValidator,{message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('Usuario',usuarioSchema );