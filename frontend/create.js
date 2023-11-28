// const axios = require('axios')
axios.get('/quiz/all')
    .then((response) => {
        console.log(response)
    })

// DODAWANIE PÓL NA PYTANIA



function addQuizQuestion() {
    let odp = document.getElementById('form')
    const quizElement = '<div class="odpowiedzi"><div class="addpytanie"><h4>Podaj pytanie:</h4><input class="question" type="text"></div><div class="odp"><h4>ODPOWIEDŹ 1</h4><input class="answer1" type="text"></div><div class="odp"><h4>ODPOWIEDŹ 2</h4><input class="answer2" type="text"></div><div class="odp"><h4>ODPOWIEDŹ 3</h4><input class="answer3" type="text"></div><div class="odp"><h4>ODPOWIEDŹ 4</h4><input class="answer4" type="text"></div></div>'
    const newElement = document.createElement("div")
    newElement.innerHTML += quizElement
    odp.appendChild(newElement)
}

// WYSYŁANIE

function sendQuiz() {
    const name = document.getElementById('name')
    const desc = document.getElementById('desc')
    const reqBody = {
        "name": name.value,
        "description": desc.value
    }
    axios.post('/quiz/', reqBody)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}