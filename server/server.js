const express = require('express')

const app = express()

const port = 3000

var webRoutes = require('./routes/web.js')

const pug = require('pug')

const path = require('path')

app.use(webRoutes)

app.use(express.static('client/public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../client/src/views'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
