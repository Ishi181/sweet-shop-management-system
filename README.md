# 🍬 Sweet Shop Management System

A full-stack Sweet Shop Management System built using modern web technologies.  
This project demonstrates backend API development, authentication, database integration, testing using TDD, and manual API verification.

---

## 📌 Project Overview

The **Sweet Shop Management System** is a REST-based application designed to manage sweets in a shop.  
It allows users to:

- Register and log in securely
- View and manage sweets (backend-ready)
- Use JWT-based authentication
- Access protected routes
- Perform manual and automated testing

The project follows **clean architecture**, **Test Driven Development (TDD)** principles, and proper **Git version control practices**.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (MongoDB Atlas)
- Mongoose
- JWT (JSON Web Token)
- bcryptjs

### Testing
- Jest
- Supertest

### Tools
- VS Code
- Git & GitHub
- PowerShell (manual API testing)

---

## 📂 Project Structure

sweet-shop-management-system/
│
├── backend/
│ ├── src/
│ │ ├── app.js
│ │ ├── server.js
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── tests/
│ ├── package.json
│ ├── package-lock.json
│ └── .env
│
└── README.md


---

## ⚙️ Setup & Run Instructions (Backend)

### 1️⃣ Clone the Repository

```
git clone https://github.com/ishi181/sweet-shop-management-system.git
cd sweet-shop-management-system/backend 
```


2️⃣ Install Dependencies
```

npm install
```

3️⃣ Environment Variables
Create a .env file inside the backend folder:
```
env

MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

4️⃣ Run the Backend Server
```
npm run dev
Server will start at:
```
http://localhost:3000
5️⃣ Run Automated Tests
```
npm test
```

✅ Tests are written using Jest + Supertest
✅ TDD approach followed (Red → Green → Refactor)


🧪 Manual API Testing (Without Postman)
Register User
```
Invoke-RestMethod -Uri "http://localhost:3000/api/auth/register" `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{ "email": "test@test.com", "password": "123456" }'
```

Login User (Get Token)
```
$response = Invoke-RestMethod -Uri "http://localhost:3000/api/auth/login" `
-Method POST `
-Headers @{ "Content-Type" = "application/json" } `
-Body '{ "email": "test@test.com", "password": "123456" }'
$token = $response.token
```

Access Protected Route
```
Invoke-RestMethod -Uri "http://localhost:3000/api/test/protected" `
-Method GET `
-Headers @{ Authorization = "Bearer $token" }
```

🖼 Screenshots (To Be Added)

Backend server running in terminal

Successful registration response

Login response showing JWT token

Accessing protected route successfully

Passing Jest test results

📌 (Screenshots can be added in the /screenshots folder and linked here)

🤖 My AI Usage
AI tools were used responsibly during development to assist, not replace, understanding.

Tools Used
ChatGPT

How AI Was Used
Understanding error messages and debugging issues

Generating boilerplate test cases

Explaining MongoDB, JWT, and authentication flow

Clarifying PowerShell commands for manual API testing

Structuring README documentation

Reflection
AI significantly improved productivity and learning speed.
All code was understood, tested, modified, and validated manually before use.
This ensured correctness, originality, and strong conceptual clarity.

📌 Author
Ishi Singla
GitHub: https://github.com/ishi181


