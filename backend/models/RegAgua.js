const mongoose = require('mongoose');
const {Schema} = mongoose;

const regAguaSchema = new Schema({
    hora: {
        type: Number,
        required: true,
    },
    qtd: {
        type: String,
        required: true,
    }
},
    {timestamps: true}
);

const RegAgua = mongoose.model("RegAgua", regAguaSchema);

module.exports = {
    RegAgua,
    regAguaSchema,
};