        // const axios = require('axios')
        axios.get('/quiz/all')
        .then((response) => {
            console.log(response)
        })

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