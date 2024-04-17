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
}

export default new ClienteService()