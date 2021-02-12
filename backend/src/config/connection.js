import mongoose from 'mongoose'

function connection() {
    mongoose.connect("mongodb://localhost/fseletro", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB conectou com sucesso!")
    }).catch((error) => {
        console.log(error)
    })
}

export default connection()