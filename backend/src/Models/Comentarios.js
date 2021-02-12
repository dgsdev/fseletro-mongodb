import pkg from 'mongoose'
const { Schema, model } = pkg


const fseletroSchema = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    msg: {
        type: String
    },
    data: {
        type: Date,
        default: new Date()
    
    }
})

const modelo = model("comentarios", fseletroSchema)

export default modelo