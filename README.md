# Book Library

## Beskrivning

Book Library är en fullstack-webbapplikation där användaren kan hantera ett bibliotek. I applikationen går det att skapa, visa, uppdatera och ta bort böcker, kategorier och utlåningar. Frontend är byggd i React och kommunicerar med ett ASP.NET Core Web API som sparar all data i en SQL Server-databas.

## Hur man kör projektet

### Backend

1. Öppna API-projektet i Visual Studio.
2. Kontrollera att SQL Server är igång.
3. Kör projektet (F5 eller Start).
4. API:t startar och Swagger öppnas.

### Frontend

1. Öppna frontend-projektet i Visual Studio Code eller en terminal.
2. Installera beroenden:

```bash
npm install
```

3. Starta frontend:

```bash
npm run dev
```

4. Öppna adressen som visas i terminalen (vanligtvis `http://localhost:5173`).

## Endpoints

### Books

- GET `/api/Book`
- GET `/api/Book/{id}`
- POST `/api/Book`
- PUT `/api/Book/{id}`
- DELETE `/api/Book/{id}`

### Categories

- GET `/api/Category`
- GET `/api/Category/{id}`
- POST `/api/Category`
- PUT `/api/Category/{id}`
- DELETE `/api/Category/{id}`

### Loans

- GET `/api/Loan`
- GET `/api/Loan/{id}`
- POST `/api/Loan`
- PUT `/api/Loan/{id}`
- DELETE `/api/Loan/{id}`

## Hur frontend pratar med API:et

Frontend är byggd i React och använder HTTP-anrop via `fetch` för att kommunicera med ASP.NET Core Web API. API:t hanterar all logik och sparar informationen i SQL Server-databasen. Kommunikation sker i JSON-format.

## Reflektion

Det som gick bra var att bygga upp CRUD-funktionerna och koppla ihop frontend med backend. Den största utmaningen var att få kommunikationen mellan React och API:t att fungera, bland annat med CORS, rätt API-adress och uppdateringsfunktionen för lån. När dessa problem hade lösts fungerade applikationen som planerat och projektet gav mig en bättre förståelse för hur en fullstack-applikation är uppbyggd.
