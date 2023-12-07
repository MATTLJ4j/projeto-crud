const express = require('express')
const path = require('path')

const routes = require('./routes')
const db = require('./database')

const app = express()

// Conexao com o banco de dados 
db.connect()

//Definindo o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Definindo os arquivos publicos
app.use(express.static(path.join(__dirname, 'public')))

//Habilita server para receber dados via post (fomulario)
app.use(express.urlencoded({ extends: true}))

//definindo as rotas
app.use('/', routes)


// 404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))