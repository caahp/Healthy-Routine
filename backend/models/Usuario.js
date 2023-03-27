const mongoose = require('mongoose');
const {Schema} = mongoose;

const usuarioSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
},
    {timestamps: true},
);

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = {
    Usuario,
    usuarioSchema
}
