const mongoose = require('mongoose');
const {Schema} = mongoose;

const admSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
    {timestamps: true}
);

const Adm = mongoose.model("Adm", admSchema);

module.exports = Adm;
