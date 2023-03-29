const mongoose = require('mongoose');
const {Schema} = mongoose;

const exercicioSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    duracao: {
        type: Number,
        required: true
    },
    calorias: {
        type: Number,
        required: true
    }
},
    {timestamps: true}
);

const Exercicio = mongoose.model("Exercicio", exercicioSchema);

module.exports = {
    Exercicio
}