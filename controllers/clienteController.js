//Rotas
import express from 'express'
const router = express.Router()
import ClienteService from "../services/ClienteService.js"

//ROTA DE TODOS CLIENTES CADASTRADOS
router.get("/clientes", (req,res) => {
    ClienteService.SelectAll().then((clientes) =>{
        res.render("clientes", {
            clientes : clientes
        })
    })
})

//ROTA DE CADASTRO DE CLIENTE
router.post("/clientes/new", (req,res) => {
    ClienteService.Create(
        req.body.nome,
        req.body.cpf,
        req.body.endereco,
    )
    res.redirect("/clientes")
})

export default router 