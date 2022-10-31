const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
var cors = require('cors')



const port = process.env.PORT || 5000;

connectDB()

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/bus', require('./routes/busRoutes'))
app.use('/api/trips', require('./routes/tripRoutes'))
app.use('/api/bookings', require('./routes/bookingRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`This app listening on port ${port}`));