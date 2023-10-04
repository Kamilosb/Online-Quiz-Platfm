const express = require('express')
const router = express.Router()
const Quiz = require('../schemas/quiz')

router.delete('/:id', (req, res) => {
    //TODO: zrobić 
})

//TODO: zrobić zwracanie wybranego quizu

router.get('/all', async (req, res) => {
    try {
        await Quiz.find().then((allQuizzes) => {
            res.send(allQuizzes)
        })
    } catch (e) {
        console.log(e)
        res.status(400).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

router.get('/highest', async (req, res) => {
    try {
        await Quiz.find().then((allQuizzes) => {
            let topQuizzes = []
            for(let i in allQuizzes) {
                topQuizzes.push(allQuizzes[i])
            }     
            topQuizzes.sort((a, b) => {
                return b.rating - a.rating
            })
            res.status(200).send(topQuizzes.slice(0, 10))
        })
    } catch (e) {
        console.log(e)
        res.status(400).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

router.post('/', async (req, res) => {
    const request = req.body
    try { // dodać sprawdzanie
        const newQuiz = await Quiz.create(request)
        res.status(200).send(newQuiz.toJSON())
    } catch (e) {
        console.log(e)
        res.status(400).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

module.exports = router;