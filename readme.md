Projekt na lekcje wykonywany uzywając:
- backend:
    - nodejs
    - express
    - jwt authtoken
- frontend:
    - axios
    - html i css

========================================
Dokumentacja API backendowego (bardzo profesjonalna):

GET /api/quiz/:id <- zwraca quiz o wybranym id
DELETE /api/quiz/:id <- usuwa quiz o wybranym id (dodać sprawdzanie czy dana osoba jest właścicielem)
POST /api/quiz/ <- tworzenie quizu:
Przykładowy objekt:
{
    "name": "Kim z bajki 'kot w butach' byś był?",
    "description": "lorem ipsum bla bla bla",
    "questions": (objekt json)
    "author": "Kamil"
}

GET /api/quiz/all <- zwraca wszystkie quizy (raczej nie będzie używane ale w celach testowych może być | zaimplementować sortowanie po stronie backendu bo na froncie nie ma sensu i większe opóźnienia)
GET /api/quiz/recommended <- polecane quizy
GET /api/quiz/highest <- najwyżej oceniane quizy
GET /api/quiz/popular <- często robione quizy
GET /api/quiz/random/:amount <- często robione quizy


