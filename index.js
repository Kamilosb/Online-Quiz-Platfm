const express = require('express')
const app = express()
const port = 2137
const path = require('path')

app.use(express.static('frontend')); 

app.get('/test', (req, res) => {
    res.send('testowa odpowiedź backendu, po mojej stronie wszystko działa')
})

app.listen(port, () => {
    console.log(`Aplikacja działa na porcie ${port}`)
  })