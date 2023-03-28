const { Refeicao: RefeicaoModel} = require("../models/Refeicao");

const refeicaoController = {
    create: async (req, res) => {
        try {
            const refeicao = {
                type: req.body.type,
                calories: req.body.calories,
                protein: req.body.protein,
                carb: req.body.carb,
                fat: req.body.fat,
            };

            const response = await RefeicaoModel.create(refeicao);
            res.status(201).json({response, msg: "Refeição criada com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro ao criar a refeição"});
        }
    },
}

module.exports = refeicaoController;