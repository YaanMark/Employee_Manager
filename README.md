# 👨‍💼 Employee Manager

A simple Full Stack Employee Management system built with **HTML, CSS, JavaScript, Node.js, Express, MySQL, and Dotenv**.

This project allows users to perform complete **CRUD (Create, Read, Update, Delete)** operations on employee records through a clean and responsive interface.

---

## 📋 Features

✅ Create new employees

✅ View all registered employees

✅ Update employee information

✅ Delete employees

✅ Responsive user interface

✅ RESTful API architecture

✅ MySQL database integration

✅ Environment variable management with Dotenv

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- Vanilla JavaScript

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Environment Management
- Dotenv

---

## 📂 Project Structure

```text
EMPLOYEE_MANAGEMENT
│
├── Backend
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── employeeController.js
│   │
│   ├── routes
│   │   └── employeeRoutes.js
│   │
│   ├── node_modules
│   │
│   ├── .env
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── Frontend
│   └── public
│       ├── index.html
│       ├── style.css
│       └── script.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/yaanmark/employee-manager.git
```

### 2. Navigate to the backend folder

```bash
cd employee-manager/Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the Backend folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_manager

PORT=3000
```

---

## 🗄️ Database Setup

Create a MySQL database:

```sql
CREATE DATABASE employee_manager;
```

Create the employees table:

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) NOT NULL
);
```

---

## 🚀 Running the Application

### Start the Backend Server

```bash
npm start
```

or

```bash
node server.js
```

The API will run at:

```text
http://localhost:3000
```

### Open the Frontend

Open the `index.html` file located in:

```text
Frontend/public/index.html
```

or serve it using a local web server.

---

## 🔌 API Endpoints

### Get All Employees

```http
GET /employees
```

### Get Employee by ID

```http
GET /employees/:id
```

### Create Employee

```http
POST /employees
```

Request Body:

```json
{
  "name": "John Doe",
  "role": "Software Developer",
  "salary": 5000
}
```

### Update Employee

```http
PUT /employees/:id
```

Request Body:

```json
{
  "name": "John Doe",
  "role": "Senior Developer",
  "salary": 7000
}
```

### Delete Employee

```http
DELETE /employees/:id
```

---

## 💻 User Interface

The frontend provides a simple and intuitive interface where users can:

- Add new employees
- Edit employee information
- Delete employees
- View all employee records in a table
- Manage employee data in real-time

---

## 🔒 Environment Variables

This project uses **dotenv** to securely store configuration values.

Example:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=employee_manager

PORT=3000
```

Never commit your actual `.env` file.

---

## 📦 Dependencies

```json
{
  "express": "^5.x",
  "mysql2": "^3.x",
  "dotenv": "^17.x",
  "cors": "^2.x"
}
```

---

## 🎯 Learning Objectives

This project demonstrates:

- Full Stack Web Development
- REST API Design
- CRUD Operations
- Express Routing
- Controller Architecture
- MySQL Database Integration
- Environment Variable Management
- Frontend and Backend Communication using Fetch API

---

## 📸 Future Improvements

- Employee search functionality
- Pagination
- Authentication and Authorization
- Salary statistics dashboard
- Employee profile photos
- Data validation
- Docker support

---



## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 YaanMark

Developed as a Full Stack CRUD application using Node.js, Express, MySQL, HTML, CSS, and JavaScript.

⭐ If you found this project useful, consider giving it a star!
