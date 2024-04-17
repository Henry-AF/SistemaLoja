//imports 
import express from "express"
const app = express()
import mongoose from "mongoose"

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
app.use(express.static('public'))
// Definindo o uso das rotas dos Controllers
//app.use("/", ClientesController)

app.use(express.static('public'))
app.listen(8080, erro => {
    if(erro){
        console.log("Opa! Tivemos um erro")
    } else{
        console.log("Deu tudo ok")
    }
})

//coneção banco de dados MongoDB
mongoose.connect("mongodb://localhost:27017/loja")
// Rotas a serem criadas:
// Index 
// Clientes (Nome, CPF, Endereço) -> Array Objetos
// Produtos (Nome do produto, Preço e Categoria) -> Array Objetos
// Pedidos (Número do pedido, valor) -> Array Objetos

app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Importando Controllers
import clienteController from "./controllers/clienteController.js"
import pedidoController from "./controllers/pedidoControllers.js"
import produtoController from "./controllers/produtoController.js"

//Definindo o uso das rotas 
app.use("/", clienteController)
app.use("/", pedidoController)
app.use("/", produtoController)

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})