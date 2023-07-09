const express = require('express')
require('dotenv').config()
const cors = require('cors')
const route = require('./route')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
})

    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/api/users', route)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
})
