const { Usuario: UsuarioModel} = require("../models/Usuario");

const usuarioController = {

    create: async(req,res) => {
        try {
            
            const usuario = {
                username: req.body.username,
                password: req.body.password
            }

            const response = await UsuarioModel.create(usuario);
            res.status(201).json({response, msg: "Usuário criado com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    },
    
    getAll: async (req, res) => {
        try {
          const usuarios = await UsuarioModel.find();
          res.json(usuarios);
        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Erro no getAll" });
        }
      },
    
      get: async (req, res) => {
        try {
          const id = req.params.id;
          const usuario =  await UsuarioModel.findById(id);
    
          if (!usuario) {
            res.status(404).json({ msg: "Usuario não encontrado" });
          }
    
          res.json(usuario);
    
        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Erro get Usuario" });
        }
      }

}

module.exports = usuarioController;