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

    //Delete 
    Delete(id){
        Produto.findByIdAndDelete(id).then(() => {
            console.log(`Os dados do Produto com id: ${id} foram excluidos com sucesso`)
        }).catch(err => {
            console.log(err)
        })
    }
    //Update
    Update(id, nome, preco, categoria){
        Produto.findByIdAndUpdate(id, {
            nome : nome,
            preco : preco,
            categoria : categoria
        }).then(() => {
            console.log(`Os dados do produto com id: ${id} foram alterados com sucesso`)
        })
    }


    SelectOne(id){
        const produto = Produto.findOne({_id : id})
        return produto
    }
}

export default new ProdutosService()