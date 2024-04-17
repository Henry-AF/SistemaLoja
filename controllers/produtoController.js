import express from 'express'
import ProdutosService from '../services/ProdutosService.js'
const router = express.Router()

//ROTA DE SELEÇÃO GERAL
router.get("/produtos", (req, res)=> {
    ProdutosService.SelectAll().then((produtos)=> {
        res.render("produtos", {
            produtos : produtos
        })
    })
})

//ROTA DE CRIAÇÃO DE PRODUTO
router.post("/produtos/new", (req,res) => {
    ProdutosService.Create(
        req.body.nome,
        req.body.preco,
        req.body.categoria
    )
    res.redirect("/produtos")
})


export default router 