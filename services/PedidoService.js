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
}

export default new PedidoService()