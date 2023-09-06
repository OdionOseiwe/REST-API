require('dotenv').config();

const express = require('express');
const app = express();
require('express-async-errors');
const connectDB = require('./db/connect')
const Router = require('./routes/products')

// middleware
const error_handler = require('./middleware/error-handler.js');
const not_found = require('./middleware/not-found.js');

app.use(express.json())

// routes
app.get('/', (req, res)=>{
    res.send("<h1>API stores</h1> <a href = '/api/v1/products'>stores routes</a>")
})

app.use('/api/v1/products', Router);

// middlewares
app.use(error_handler);
app.use(not_found);

//PORT
const PORT = process.env.PORT || 3000

const start = async() =>{
    try {
        await connectDB(process.env.MONGP_URL)
        app.listen(PORT, console.log(`listening on PORT ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

start();