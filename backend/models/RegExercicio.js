const mongoose = require('mongoose');
const {Schema} = mongoose;

const regExercicioSchema = new Schema({
    duracao: {
        type: Number,
        required: true,
    },
    hora: {
        type: String,
        required: true,
    }
},
    {timestamps: true}
);

const RegExercicio = mongoose.model("RegExercicio", regExercicioSchema);

module.exports = {
    RegExercicio,
    regExercicioSchema,
};