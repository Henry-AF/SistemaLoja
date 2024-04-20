import mongoose from "mongoose";
import cliente from "../models/cliente.js"

const Cliente = mongoose.model("Cliente", cliente)

class ClienteService{
    //Selecionar todos os clientes cadastrados
    
    SelectAll(){
        const clientes = Cliente.find()
        return clientes
    }

    //Cadastrando um cliente no banco 
    Create(nome, cpf, endereco){
        const novoCliente = new Cliente({
            nome : nome,
            cpf : cpf,
            endereco : endereco
        })
        novoCliente.save()
    }

    Update(id, nome, cpf, endereco){
        Cliente.findByIdAndUpdate(id, {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        }).then(() => {
            console.log(`Dados do cliente com id: ${id} alterados"`)
        })
    }

    Delete(id){
        Cliente.findByIdAndDelete(id).then(() => {
            console.log(`Cliente com a id: ${id} foi deletado!`)
        }).catch(err => {
            console.log(err)
        })
    }

    SelectOne(id){
        const cliente = Cliente.findOne({ _id : id})
        return cliente 
    }

}

export default new ClienteService()