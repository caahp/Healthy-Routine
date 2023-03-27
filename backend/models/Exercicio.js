const mongoose = require('mongoose');
const {Schema} = mongoose;

const exercicioSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    }
},
    {timestamps: true}
);

const Exercicio = mongoose.model("Exercicio", exercicioSchema);

module.exports = {
    Exercicio,
    exercicioSchema
}