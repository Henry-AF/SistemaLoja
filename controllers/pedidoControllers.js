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

export default router