const express = require('express')
require('dotenv').config()
const productRouter = require('./router')


const app = express()
const port = process.env.PORT || 6000

app.get('/', (req,res)=> res.send("Hellllo worlddddd"))

app.use('/api/product', productRouter)



app.listen(port, () => console.log(`App running on port ${port}`));
