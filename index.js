const express = require('express')
const app = express()
const port = 2137
const path = require('path')
require("dotenv").config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)

app.use(express.json())

app.use(express.static('frontend'));

app.get('/test', (req, res) => {
    res.send('testowa odpowiedź backendu, po mojej stronie wszystko działa')
})
// const userRouter = require('./routers/loginRouter')
// app.use('/users', userRouter)

const quizRouter = require('./backend/routers/quizRouter.js')
app.use('/quiz', quizRouter)

app.listen(port, () => {
    console.log(`Aplikacja działa na porcie ${port}`)
})