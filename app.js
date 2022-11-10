const express = require('express')
const hbs = require('hbs')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


require('./db/ddbb-connection')
const Products = require('./models/Product.model')

app.get('/', (req, res) => {

    res.render('index')
})
app.get('/latienda', (req, res) => {
    Products
        .find()
        .sort({ price: 1 })
        .then((allProductos => {
            res.render('latienda', { products: allProductos })
        }))

        .catch(err => console.log(err))
})


app.listen(5005, () => console.log('APP LISTENING'))
