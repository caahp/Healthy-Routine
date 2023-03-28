const mongoose = require('mongoose');
const {Schema} = mongoose;

const refeicaoSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    calories: {
        type: Number,
        required: true,
    },
    protein: {
        type: Number,
        required: true,
    },
    carb: {
        type: Number,
        required: true,
    },
    fat: {
        type: Number,
        required: true,
    }
},
    {timestamps: true}
);

const Refeicao = mongoose.model("refeicao", refeicaoSchema);

module.exports = {
    Refeicao,
    refeicaoSchema,
}