const Cliente  = require("../models/Cliente");

const clienteController = {
  create: async (req, res) => {
    try {
    
      const cliente = {
        username: req.body.username,
        password: req.body.password,
        nome: req.body.nome,
        idade: req.body.idade,
        peso: req.body.peso,
        altura: req.body.altura,
        exercicios: req.body.exercicios,
        refeicoes: req.body.refeicoes,
      };

      const response = await Cliente.create(cliente);

      res.status(201).json({ response, msg: "Cliente criado com sucesso!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro ao criar o cliente" });
    }
  },

  getAll: async (req, res) => {
    try {
      const clientes = await Cliente.find();
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no getAll" });
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const cliente =  await Cliente.findById(id);

      if (!cliente) {
        res.status(404).json({ msg: "Cliente não encontrado" });
      }

      res.json(cliente);
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro get Cliente" });
    }
  }




};

module.exports = clienteController;
