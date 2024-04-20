import express from 'express'
import ProdutosService from '../services/ProdutosService.js'
import produtos from '../models/produtos.js'
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

//ROTA DE EXCLUSÃO 
router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id
    ProdutosService.Delete(id)
    res.redirect("/produtos")
})

//ROTA DE UPLOAD
router.post("/produtos/update/:id", (req, res) => {
    
    ProdutosService.Update(
        req.body.id,
        req.body.nome,
        req.body.preco,
        req.body.categoria
    )
    res.redirect("/produtos")
}) 

//ROTA DE EDIÇÃO
router.get("/produto/edit/:id", (req,res) => {
    const id = req.params.id
    ProdutosService.SelectOne(id).then((produtos) => {
        res.render("produtoEdit", {
            produtos : produtos
        })
    })
})

export default router 