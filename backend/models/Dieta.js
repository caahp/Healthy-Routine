const mongoose = require("mongoose");
const {Schema} = mongoose;

const dietaSchema = new Schema({
    goalCal: {
        type: Number,
        required: true,
    },
    goalProtein: {
        type: Number,
        required: true,
    },
    goalFat: {
        type: Number,
        required: true,
    },
    goalCarb: {
        type: Number,
        required: true,
    }
},
 {timestamps: true}
)

const Dieta = mongoose.model("Dieta", dietaSchema);
module.exports = Dieta;