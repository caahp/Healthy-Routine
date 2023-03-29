const mongoose = require('mongoose');
const {Schema} = mongoose;

const regRefeicaoSchema = new Schema({
    hora: {
        type: String,
        required: true,
    }
},
    {timestamps: true}
);

const RegRefeicao = mongoose.model("RegRefeicao", regRefeicaoSchema);

module.exports = {
    RegRefeicao,
    regRefeicaoSchema,
};