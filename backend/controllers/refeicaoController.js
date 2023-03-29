const { Refeicao: RefeicaoModel} = require("../models/Refeicao");

const refeicaoController = {
    create: async (req, res) => {
        try {
            const refeicao = {
              nome: req.body.nome,
              tipo: req.body.tipo,
              hora: req.params.hora,
              calorias: req.params.calorias
            };

            const response = await RefeicaoModel.create(refeicao);
            res.status(201).json({response, msg: "Refeição criada com sucesso!"});

        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Erro ao criar a refeição"});
        }
    },

    getAll: async (req, res) => {
        try {
          const refeicoes = await RefeicaoModel.find();
          res.json(refeicoes);
        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Erro no getAll" });
        }
      },
    
      get: async (req, res) => {
        try {
          const id = req.params.id;
          const refeicao =  await RefeicaoModel.findById(id);
    
          res.json(refeicao);
    
        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Erro get Refeicao" });
        }
      }
}

module.exports = refeicaoController;