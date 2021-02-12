import express from 'express'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())

const porta = 8080
app.listen(porta, () => {
    console.log("Servidor rodando em http://localhost:" + porta)
})

export default app