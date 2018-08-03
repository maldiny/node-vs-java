const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Personas = new Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    }
},{
  collection: 'personas'
});

module.exports = mongoose.model('Personas', Personas);
