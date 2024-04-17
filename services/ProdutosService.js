import mongoose from "mongoose"
import produtos from "../models/produtos.js"

const Produto = mongoose.model("Produto", produtos)

class ProdutosService{
    //Selecionar todos
    SelectAll(){
        const produtos = Produto.find()
        return produtos
    }

    //Cadastrar
    Create(nome, preco, categoria){
        const novoProduto = new Produto({
            nome : nome,
            preco : preco,
            categoria : categoria
        })
        novoProduto.save()
    }
}

export default new ProdutosService()