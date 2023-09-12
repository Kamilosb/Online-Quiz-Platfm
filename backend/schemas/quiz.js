const mongoose = require('mongoose')

const quizSchema = new mongoose.Schema({
    name: String,
    description: String
    // author: String
})


// {
//     "name": "Kim z bajki 'kot w butach' byś był?",
//     "description": "lorem ipsum bla bla bla",
//     "questions": (objekt json)
//     "author": "Kamil"
// }

module.exports = mongoose.model("quiz", quizSchema)