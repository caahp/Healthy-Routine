const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

//express-session library
const session = require('express-session');

//Mongo Data:
//caahp - YdEHofWSQqZ9MgeZ
//201.75.18.252/32

// DB Connection:
const conn = require ("./db/conn");
conn();


//Sessão
app.use(session({
    secret: "sua_chave_secreta",
    resave: false,
    saveUnitialized: false
}));

app.use(cors());
app.use(express.json());

app.use("/public/js", express.static(__dirname + '/public/js', {
    setHeaders: function(req, res, stat) {
        res.set("Content-Type", "application/javascript");
    }
}));

const {Cliente} = require("./models/Cliente");

app.post("/cadastro", async (req, res) => {
    const {
        name:nome, age: idade, weight: peso, height: altura, username, password
    } = req.body;
    console.log(req.body);
    try {
        //Verificar se o username já está em uso
        const usernameExists = await Cliente.findOne({ username });
        if (usernameExists) {
            return res.status(409).json({error: "Username already exists"})
        }

        const cliente = new Cliente({
            nome,
            idade,
            peso,
            altura,
            username,
            password,
            //exercicios: [],
            //refeicoes: []
        });
        await cliente.save();

        req.session.sucessMessage = "Cadastro realizado com sucesso!"
        
        //Redireconar para a pagina inicial
        res.redirect("/inicio");

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Erro ao salvar no banco de dados"})
        
    }
});


//Routes
const routes = require("./routes/router");
app.use("/api", routes);

//Caminho dos arquivos do Frontend
const STATIC_PATH = process.env.STATIC_PATH || "../frontend/views";

//username page
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, STATIC_PATH, "cadastro.html"));
});

app.get("/cadastro", function (req, res) {
    res.sendFile(path.join(__dirname, STATIC_PATH, "cadastro.html"));
});

app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname, STATIC_PATH, "login.html"));
});

app.get("/inicio", function (req, res) {
    res.sendFile(path.join(__dirname, STATIC_PATH, "inicio.html"));
})










app.listen(3000, function () {
    console.log('Servidor online! Porta 3000');
})