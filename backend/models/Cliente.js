const mongoose = require('mongoose');
const {Schema} = mongoose;
const {exercicioSchema} = require("./Exercicio")
const {refeicaoSchema} = require("./Refeicao")
const {usuarioSchema} = require("./Usuario")

const clienteSchema = new Schema({
    ...usuarioSchema.obj,
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true,
    },
    peso: {
        type: Number,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
    },
    exercicios: {
        type: [],
    },
    refeicoes: {
        type: [],
    }
},
    {timestamps: true}
);

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
