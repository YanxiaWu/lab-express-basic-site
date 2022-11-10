const mongoose = require('mongoose')
const databaseName = 'ironshop'
const connectionString = `mongodb://localhost/${databaseName}`

mongoose
    .connect(connectionString)
    .then(connectionDetails => console.log('connected to Mongo!', connectionDetails))
    .catch(error => console.log('Error connectiong to Mongo', error))