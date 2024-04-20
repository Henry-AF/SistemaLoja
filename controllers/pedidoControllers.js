//ROTAS 
import express, { Router } from 'express'
const router = express.Router()
import PedidoService from "../services/PedidoService.js"

//ROTA DE PEDIDOS GERAL
router.get("/pedidos", (req,res) => {
    PedidoService.SelectAll().then((pedidos) =>{
        res.render("pedidos", {
            pedidos : pedidos
        })
    })
})

//ROTA PARA CADASTRAR PEDIDOS
router.post("/pedidos/create", (req,res) => {
    PedidoService.Create(
        req.body.numero,
        req.body.valor
    )
    res.redirect("/pedidos")
})

//ROTA DE EXCLUSÃO 
router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id
    PedidoService.Delete(id)
    res.redirect("/pedidos")
})

//ROTA DE UPLOAD
router.post("/pedidos/update/:id", (req, res) => {
    
    PedidoService.Update(
        req.body.id,
        req.body.numero,
        req.body.valor
    )
    res.redirect("/pedidos")
}) 

//ROTA DE EDIÇÃO
router.get("/pedidos/edit/:id", (req,res) => {
    const id = req.params.id
    PedidoService.SelectOne(id).then((pedidos) => {
        res.render("pedidoEdit", {
            pedidos : pedidos
        })
    })
})



export default router