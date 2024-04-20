import mongoose from "mongoose";
import pedido from "../models/pedidos.js"

const Pedido = mongoose.model("Pedido", pedido)

//Classes com os Métodos
class PedidoService{
    //Selecionar 
    SelectAll(){
        const pedidos = Pedido.find()
        return pedidos
    }

    //Cadastrar Pedidos
    Create(numero, valor){
        const novoPedido = new Pedido({
            numero : numero,
            valor : valor
        })
        novoPedido.save()
    }

    //Update 
    Update(id, numero, valor) {
        Pedido.findByIdAndUpdate(id, {
            numero : numero,
            valor : valor
        }) .then(() => {
            console.log(`Os dados do pedido id: ${id} foram alteradas`)
        })
    }

    //Delete 
    Delete(id) {
        Pedido.findByIdAndDelete(id).then(() => {
            console.log(`Os dados do pedido: ${id}, foram alterados`)
        }).catch(err => {
            console.log(err)
        })
    }
    
    SelectOne(id){
        const pedido = Pedido.findOne({_id : id})
        return pedido
    }
}

export default new PedidoService()