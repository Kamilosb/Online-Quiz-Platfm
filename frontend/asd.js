// axios.get('api/quiz/all')
//         .then((response) => {
//             console.log(response)
//         })

let popularne = document.getElementsByClassName('popularne')
let polecane = document.getElementsByClassName('polecane')
let najoceniane = document.getElementsByClassName('najoceniane')

// popularne, polecane, najoceniane
function addNewBox(category, title, image) {
    switch(category) {
        case 'popularne':
            category = popularne[0]
            break
        case 'polecane':
            category = polecane[0]
            break
        case 'najoceniane':
            category = najoceniane[0]
            break
    }
    // console.log(polecane[0].innerHTML)
    const newBox = `<div class="rectangle">\n<div class="rectangle-2"></div>\n<div class="text-wrapper-5">${title}</div>`
    // console.log(category.innerHTML)
    category.innerHTML += `${newBox}`
}

addNewBox('popularne', 'HASDIHAS1dsdsd273dsdsdsdsdsdsdsds163')
addNewBox('polecane', '111111dsd')
addNewBox('polecane', '22222222222222222')

addNewBox('najoceniane', 'AAAAAAAAAAAAA')

// addNewBox('polecane', '73273897ASDHJGASDJHGA')

// console.log(popularne)