const mongoose = require('mongoose');

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect ("mongodb+srv://caahp:YdEHofWSQqZ9MgeZ@healthyroutinedata.yoz3lp7.mongodb.net/?retryWrites=true&w=majority");
        console.log("Conectado ao banco!");
    } 

    catch (error) {
        console.log("Error: ", error);
    }
}

module.exports = main

//user: caahp
//password: YdEHofWSQqZ9MgeZ