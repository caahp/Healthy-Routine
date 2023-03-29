const { Exercicio: ExercicioModel} = require("../models/Exercicio");

const exercicioController = {
    create: async (req, res) => {
        try {
            const exercicio = {
                tipo: req.params.tipo,
                hora: req.params.hora,
                duracao: req.params.duracao,
                calorias: req.params.calorias
            };
            const response = await ExercicioModel.create(exercicio);
            res.status(201).json({response, msg: "Exercicio criado com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro ao criar exercicio"});
        }
    },

    getAll: async (req, res) => {
        try {
          const exercicios = await ExercicioModel.find();
          res.json(exercicios);
        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Erro no getAll" });
        }
      },
    
      get: async (req, res) => {
        try {
          const id = req.params.id;
          const exercicio =  await ExercicioModel.findById(id);
    
          res.json(exercicio);
    
        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Erro get Exercicio" });
        }
      }
}

module.exports = exercicioController;