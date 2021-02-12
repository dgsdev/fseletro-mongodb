import pkg from 'mongoose'
const { Schema, model } = pkg


const fseletroSchema = new Schema({
    cliente: {
        type: String
    },
    endereco: {
        type: String
    },
    telefone: {
        type: String
    },
    produto: {
        type: String
    },
    preco: {
        type: Number
    },
    quantidade: {
        type: Number
    },
    preco_total: {
        type: Number
    },
    dia: {
        type: Date,
        default: new Date()
    
    }
})

const modelo = model("pedidos", fseletroSchema)

export default modelo