const mongoose = require('mongoose');
const {Schema} = mongoose;

const refeicaoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    },
    calorias: {
        type: Number,
        required: true,
    }
},
    {timestamps: true}
);

const Refeicao = mongoose.model("refeicao", refeicaoSchema);

module.exports = {
    Refeicao
}