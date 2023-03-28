const mongoose = require("mongoose");
const {Schema} = mongoose;

const IMCSchema = new Schema({
    imc : {
        type: Number,
    },
    status: {
        type: String
    },
    peso: {
        type: Number
    },
    data: {
        type: String
    }
},
 {timestamps: true}
)

const IMC = mongoose.model("IMC", IMCSchema);
module.exports = IMC;