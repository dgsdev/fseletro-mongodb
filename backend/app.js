import app from './src/config/server.js'
import connection from './src/config/connection.js'
import Produtos from './src/Models/Produtos.js'
import Comentarios from './src/Models/Comentarios.js'
import Pedidos from './src/Models/Pedidos.js'

// SELECT
app.get("/produtos", async (req, res) => {
    const resultado = await Produtos.find()

    res.json(resultado)
})
app.get("/comentarios", async (req, res) => {
    const resultado = await Comentarios.find()

    res.json(resultado)
})
app.get("/pedidos", async (req, res) => {
    const resultado = await Pedidos.find()

    res.json(resultado)
})

// INSERT
app.post("/produtos", async (req, res) => {
    const { descricao, preco, preco_venda, imagem, categoria } = req.body

    let resultado = await Produtos.create({ descricao, preco, preco_venda, imagem, categoria })

    res.json(resultado)
})

app.post("/comentarios", async (req, res) => {
    const { nome, email, msg } = req.body

    let resultado = await Comentarios.create({ nome, email, msg })

    res.json(resultado)
})

app.post("/pedidos", async (req, res) => {
    const { cliente, endereco, telefone, produto, preco, quantidade, preco_total } = req.body

    let resultado = await Pedidos.create({ cliente, endereco, telefone, produto, preco, quantidade, preco_total })

    res.json(resultado)
})

// UPDATE

app.put("/:id", async (req, res) => {
    const { id } = req.params
    const { nome, preco } = req.body
// 1 - Condição 2 - 
    let resultado = await Produtos.updateOne({ _id: id }, {nome, preco})

    res.json(resultado)
})

// DELETE

app.delete("/", async (req, res) => {
    const { id } = req.body
    // findByIdAndDelete({ _id: id}) Select antes de excluir
    let resultado = await Produtos.deleteOne({ _id: id})


    //res.json({ message: "Deletado com Sucesso!"})
    res.json(resultado)
})

app.delete("/pedidos", async (req, res) => {
    const { id } = req.body

    let resultado = await Pedidos.deleteOne({ _id: id})

    res.json(resultado)

})

app.delete("/comentarios", async (req, res) => {
    const { id } = req.body

    let resultado = await Comentarios.deleteOne({ _id: id})

    res.json(resultado)

})