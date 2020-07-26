const mongoose = require('mongoose');
const { Schema } = mongoose;

const printSenadorSchema = new Schema({
    
    municipio: {type: String, required: true},
    centro: {type: String, required: true},
    colegio: {type: String, required: true},
    votosValidos: {type: Number, required: true},
    votosEmitidos: {type: Number, required: true},
    votosNulos: {type: Number, required: true},
    boletasObservadas: {type: Number, required: true},
    apld: {type: Number, required: true},
    aprm: {type: Number, required: true},
    abis: {type: Number, required: true},
    moda: {type: Number, required: true},
    pnvc: {type: Number, required: true}
    
});

module.exports = mongoose.model('PrintSenador', printSenadorSchema);