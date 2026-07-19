# Library Management System

## About the project

Library Management System is a fullstack web application for managing a library. Users can register, log in, and manage books, categories, and loans. The application consists of a React frontend that communicates with an ASP.NET Core Web API connected to a SQL Server database.

## Technologies

- React
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- JWT Authentication
- ASP.NET Identity

## How to run the project

### Backend

1. Open the API project in Visual Studio.
2. Update the database if needed.
3. Run the API.
4. Swagger is available at:

```
https://localhost:7072/swagger
```

### Frontend

Open the React project and run:

```bash
npm install
npm run dev
```

The frontend will start on:

```
http://localhost:5174
```

## API Endpoints

### Authentication

- POST `/api/Auth/register`
- POST `/api/Auth/login`
- POST `/api/Auth/make-admin/{username}`

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

## Communication between frontend and backend

The React frontend communicates with the ASP.NET Core Web API using the Fetch API. Data is sent and received as JSON. Protected endpoints require a JWT token, which is stored after login and included in the Authorization header for authenticated requests.

## Reflection

The project helped me understand how a React frontend communicates with an ASP.NET Core Web API. I also learned how to use Entity Framework Core, SQL Server, JWT authentication, and role-based authorization. The biggest challenge was connecting the frontend and backend and making sure authenticated requests worked correctly, but after troubleshooting the application worked as expected.
