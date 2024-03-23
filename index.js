const express = require ('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(8080, erro => {
    if(erro){
        console.log("Opa! Tivemos um erro")
    } else{
        console.log("Deu tudo ok")
    }
})


// Rotas a serem criadas:
// Index 
// Clientes (Nome, CPF, Endereço) -> Array Objetos
// Produtos (Nome do produto, Preço e Categoria) -> Array Objetos
// Pedidos (Número do pedido, valor) -> Array Objetos

app.get('/', (req, res) =>{
    res.render("index") //Pagina home
})
app.get('/clientes', (req, res) =>{

    const clientes = [
        {Nome: "Henry Magalhães", CPF:"23232323-23", Endereco: "Rua das Flores, 123 - Bairro Primavera, Cidade Feliz - Estado Alegria, CEP 12345-678, Brasil"},
        {Nome: "Luis Ferreira da Silva", CPF:"8999734-22", Endereco: "Via Roma, 789 - Quartiere Sole, Città Felice - Regione Serenità, CAP 54321, Italia"},
        {Nome: "Antônio de Oliveira Fernandes", CPF:"322445323-18", Endereco: "Calle de la Luna, 234 - Barrio Estrella, Ciudad Encantada - Estado de Alegría, CP 56789, España"},
        {Nome: "Roberto Carlos", CPF:"432556432-23", Endereco: "Alameda das Rosas, 876 - Bairro Sol Nascente, Cidade Alegre - Estado da Felicidade, CEP 23456, Brasil"}
    ]
    res.render("clientes.ejs", {
        clientes : clientes
    }) //Pagina home


})
app.get('/produtos', (req, res) =>{ //Nome do Produto //Preço //Categoria

    const produtos = [
        {nomeProduto: "Iphone 11 Pro 256GB", preco: 2500.00, categoria: "Smartphone"},
        {nomeProduto: "Iphone 12 roxo 64GB", preco: 3200.00, categoria: "Smartphone"},
        {nomeProduto: "Iphone Xs Max 256GB", preco: 1900.00, categoria: "Smartphone"},
        {nomeProduto: "Iphone 7 Plus 128GB", preco: 800.00, categoria: "Smartphone"},
        {nomeProduto: "MacBook Pro 512GB SSD", preco: 15000.00, categoria: "Notebook"},
        {nomeProduto: "Lenovo 256GB SSD", preco: 15000.00, categoria: "Notebook"}
    ]
    res.render("produtos.ejs", {
        produtos : produtos
    }) //Pagina home

})
app.get('/pedidos', (req, res) =>{

    const pedidos = [
        {numpedido: 1, valorTotal: 2900.00},
        {numpedido: 4, valorTotal: 8600.00},
        {numpedido: 7, valorTotal: 3450.00},
        {numpedido: 11, valorTotal: 12090.00}
    ]
    res.render("pedidos.ejs", {
        pedidos : pedidos
    }) //Pagina home


})
