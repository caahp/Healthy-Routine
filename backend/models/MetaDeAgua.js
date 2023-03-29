// Classe que define a Meta de água do Cliente
const mongoose = require('mongoose');
const {Schema} = mongoose;

const metaDeAguaSchema = new Schema({
    meta: {
        type: Number,
        required: true,
    }
},
    {timestamps: true}
);

const MetaDeAgua = mongoose.model("MetaDeAgua", metaDeAguaSchema);

module.exports = {
    MetaDeAgua,
    metaDeAguaSchema,
};