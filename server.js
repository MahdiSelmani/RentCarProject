const express = require('express');
const connectDB  = require('./db');
require('dotenv').config()
const app = express();
const carRoute = require('./routes/carsRoute')

const port = process.env.PORT;

connectDB();


app.use(express.json());


app.use('/api/cars', carRoute)







app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
