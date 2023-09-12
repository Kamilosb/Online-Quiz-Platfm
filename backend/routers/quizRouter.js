const express = require('express')
const router = express.Router()
const Quiz = require('../schemas/quiz')

// router.get('/:id', async (req, res) => {
//     const quiz = await Quiz.findById(id)
//     // request to bazy danych
// })

router.delete('/:id', (req, res) => {

})
router.get('/all', async (req, res) => {
    try {
        await Quiz.find().then((allQuizzes) => {
            console.log(allQuizzes)
            res.send(allQuizzes)
            // res.send()
        })
    } catch (e) {
        console.log(e)
    }
})

router.post('/', async (req, res) => {
    const request = req.body
    try { // dodać sprawdzanie
        // console.log('Tworzenie quizu ', request)
        await Quiz.create(request)
        res.status(200)
    } catch (e) {
        res.status(400).send(e.toString())
    }
})

module.exports = router;