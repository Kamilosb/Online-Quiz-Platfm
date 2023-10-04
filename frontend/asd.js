// axios.get('api/quiz/all')
//         .then((response) => {
//             console.log(response)
//         })

let pop = document.getElementsByClassName('popularne-1')

function addNewBox(title) {
    const newBox = `<div class="rectangle">\n<div class="rectangle-2"></div>\n<div class="text-wrapper-5">${title}</div>`
    console.log(pop[0].innerHTML)
    pop[0].innerHTML += `${newBox}`
}

addNewBox('UIASDGASd')
addNewBox('yt 5yt54etyher')
addNewBox('asdasdasfa')
addNewBox('9u32rhnfdefibnewfewfnewdasdasdnfuen')
