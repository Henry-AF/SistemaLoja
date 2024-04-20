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

//ROTA DE EDIÇÃO 
router.get("/edit/:id", (req, res) => {
    const id = req.params.id 
    ClienteService.SelectOne(id).then((cliente) => {
        res.render("clienteEdit", {
            cliente : cliente
        })
    })
})

//ROTA DE UPLOAD
router.post("/cliente/update/:id", (req, res) => {
    ClienteService.Update(
        req.body.id,
        req.body.nome,
        req.body.cpf,
        req.body.endereco
    )
    res.redirect("/clientes")
})

//ROTA DE EXCLUSÃO 
router.get("/delete/:id", (req, res) => {
    const id = req.params.id
    ClienteService.Delete(id)
    res.redirect("/clientes")
})



export default router 