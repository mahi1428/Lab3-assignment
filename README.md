# Lab 3 - JavaScript Frameworks Assignment

This repository contains an **Express.js application** demonstrating **CRUD operations** using a JSON file as a simple database.

## 📌 Features:

- ✅ Express.js API with **GET, POST, PUT, DELETE** methods
- ✅ JSON file-based data storage
- ✅ Nodemon for development mode
- ✅ API testing using Postman

## 📂 Project Structure:

```
Lab3-assignment/
├── data/
│   ├── movies.json  # JSON file storing movie records
├── file1.js         # Express.js boilerplate with GET route
├── file2.js         # API to fetch movies from JSON
├── file3.js         # CRUD API operations (POST, PUT, DELETE)
├── package.json     # Node.js dependencies
└── README.md        # Project documentation
```

## 🚀 How to Run the Project:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/mahi1428/Lab3-assignment.git
   ```
2. **Navigate into the project directory**:
   ```sh
   cd Lab3-assignment
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Run the server using Nodemon**:
   ```sh
   npx nodemon file3.js
   ```
5. **API Endpoints:**
   - **GET /movies** → Retrieve all movies
   - **POST /movies** → Add a new movie
   - **PUT /movies/:id** → Update a movie by ID
   - **DELETE /movies/:id** → Delete a movie by ID

## 🛠 Tools Used:

- **Node.js** & **Express.js**
- **Postman** for API Testing
- **Git & GitHub** for version control

## 📌 Authors:

- **Mahi Dharmeshkumar Patel**
- **Neel Manishkumar Patel**
- **Pratham Ghanshyambhai Patel**
