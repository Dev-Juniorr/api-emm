const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bookingsRoute = require('./routes/index')
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose')
const env_mongo = process.env.MONGO_URL

mongoose.connect(env_mongo)
const database = mongoose.connection
database.on('error', (e) => {
    console.log(e);
})

database.once('connected', () => {
    console.log('Conectado');
})

const app = express();

app.set('json spaces', 2)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/bookings', bookingsRoute)

app.listen(PORT, () => console.log(`Perfect in  ${PORT}`));
