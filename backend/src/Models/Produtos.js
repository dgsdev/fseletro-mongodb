import pkg from 'mongoose'
const { Schema, model } = pkg


const fseletroSchema = new Schema({
    descricao: {
        type: String
    },
    preco: {
        type: Number
    },
    preco_venda: {
        type: Number
    },
    imagem: {
        type: String,
    
    }
})

const modelo = model("produtos", fseletroSchema)

export default modelo