const express = require('express')
const router = express.Router()
const Quiz = require('../schemas/quiz')

router.delete('/:id', async (req, res) => {
    try {
        await Quiz.findByIdAndDelete(id)
        res.status(200).send('Quiz pomyślnie usunięty')
    } catch (e) {
        res.status(500).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

router.get('/:id', async(req, res) => {
    try {
        await Quiz.findById().then((quiz) => {
            res.status(200).send(quiz)
        })
    } catch (e) {
        res.status(500).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

router.get('/all', async (req, res) => {
    try {
        await Quiz.find().then((allQuizzes) => {
            res.send(allQuizzes)
        })
    } catch (e) {
        res.status(500).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

router.post('/random', async (req, res) => {
    const count = req.body.count
    try {
        const documentCount = await Quiz.countDocuments()
        let randomQuizArray = []

        if(count > 9 || documentCount <= count) {
            res.status(300).send('Podana liczba jest za duża')
            return
        }

        for(let i in count) {
            let random = Math.floor(Math.random() * count)
            randomQuizArray.push(await Quiz.findOne().skip(random))
        }
        res.send(randomQuizArray)
    } catch (e) {
        console.log(e)
        res.send(e)
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
        res.status(500).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

router.post('/', async (req, res) => {
    const request = req.body
    try { // dodać sprawdzanie
        const newQuiz = await Quiz.create(request)
        res.status(200).send(newQuiz.toJSON())
    } catch (e) {
        res.status(400).send('Wystąpił błąd, skontaktuj się z administratorem')
    }
})

module.exports = router;