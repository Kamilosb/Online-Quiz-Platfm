const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: String,
    type: Boolean,
    answers: {
        type: String,
        required: Boolean
    }
})

const quizSchema = new mongoose.Schema({
    name: String,
    description: String,
    questions: [questionSchema],
    author: String
})

module.exports = mongoose.model("quiz", quizSchema)