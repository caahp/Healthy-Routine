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
    

}

module.exports = usuarioController;