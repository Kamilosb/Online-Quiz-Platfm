const express = require('express')
const app = express()
const port = 80
const path = require('path')
require("dotenv").config()

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)

app.use(express.json())
app.use(express.static('frontend'))

const quizRouter = require('./backend/routers/quizRouter.js')
app.use('/api/quiz', quizRouter)

app.get('/:page', async (req, res) => {
    if(req.params.page == 'favicon.ico') {
        res.sendFile(__dirname + `/frontend/assets/favicon.ico`)
    } else if(req.params.page == 'robots.txt') {
        res.sendFile(__dirname + '/frontend/robots.txt')
    } else {
        res.sendFile(__dirname + `/frontend/` + req.params.page + `.html`)
    }
    // else if(req.params.page == "login") {
    //     res.sendFile(__dirname + `/frontend/` + req.params.page + `.php`)
    //     // res.sendFile(__dirname + `/backend/` + req.params.page + `.php`)
    // } 
})

app.listen(port, () => {
    console.log(`Aplikacja działa na porcie ${port}`)
})