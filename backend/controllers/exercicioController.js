const { Exercicio: ExercicioModel} = require("../models/Exercicio");

const exercicioController = {
    create: async (req, res) => {
        try {
            const exercicio = {
                type: req.body.type,
                calories: req.body.calories,
            };

            const response = await ExercicioModel.create(exercicio);
            res.status(201).json({response, msg: "Exercicio criado com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro ao criar exercicio"});
        }
    },
}

module.exports = exercicioController;