Projekt na lekcje wykonywany uzywając:
- backend:
    - nodejs
    - express
    - jwt authtoken
    - php
- frontend:
    - axios
    - html i css

========================================

<span>Projekt można podejrzeć pod <a href="whole-hornet-usually.ngrok-free.app">tym linkiem</a>. Ze względu na koszty hostowania nie jest on dostępny 24/7</span>

========================================
## Dokumentacja API

GET /api/quiz/:id <- zwraca quiz o wybranym id
DELETE /api/quiz/:id <- usuwa quiz o wybranym id (dodać sprawdzanie czy dana osoba jest właścicielem)
POST /api/quiz/ <- tworzenie quizu:

GET /api/quiz/all <- zwraca wszystkie quizy (raczej nie będzie używane ale w celach testowych może być | zaimplementować sortowanie po stronie backendu bo na froncie nie ma sensu i większe opóźnienia)
GET /api/quiz/highest <- najwyżej oceniane quizy
GET /api/quiz/popular <- często robione quizy
GET /api/quiz/random/:amount <- losowe quizy