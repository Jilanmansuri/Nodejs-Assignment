# 🎓 Student CGPA API

## 📌 Objective

Build a REST API using **Express.js** that manages student CGPA records stored in an in-memory JSON array.

The API uses only GET routes and follows REST principles with proper HTTP status codes and error handling.

---

## 🚀 Live Deployment

### 🌍 Live API (Render)
https://nodejs-assignment-t5ij.onrender.com

### 📬 Postman API Documentation
https://documenter.getpostman.com/view/50840642/2sBXcEmgCo

---

## ✨ Features

- ✅ In-memory JSON database with 10 student records
- ✅ 6 GET routes (4 static + 2 dynamic)
- ✅ Proper HTTP status codes
- ✅ CORS middleware enabled
- ✅ Express.json() middleware configured
- ✅ Error handling with appropriate responses
- ✅ Custom 404 route handler

---

## 📂 Project Structure

student-cgpa-api/
│
├── index.js
├── package.json
├── .gitignore
└── README.md

---

## 📚 Implemented Routes

### 🔹 Static Routes

#### 1️⃣ GET `/students`
Returns all students  
Status Code: 200

#### 2️⃣ GET `/students/topper`
Returns student with the highest CGPA  

Status Code:
- 200 (if students exist)
- 404 (if no students available)

#### 3️⃣ GET `/students/average`
Returns average CGPA of all students  

Example Response:
{
  "averageCGPA": 8.55
}

Status Code: 200

#### 4️⃣ GET `/students/count`
Returns total number of students  

Example Response:
{
  "totalStudents": 10
}

Status Code: 200

---

### 🔹 Dynamic Routes

#### 5️⃣ GET `/students/:id`
Returns student by ID  

Example:
GET /students/3

Status Code:
- 200 (if found)
- 404 (if not found)
- 400 (invalid ID format)

#### 6️⃣ GET `/students/branch/:branchName`
Returns all students from a specific branch  

Example:
GET /students/branch/CSE

Status Code: 200  
Returns empty array if no students found.

---

## 🧪 Sample API URLs (Local Testing)

http://localhost:3000/students  
http://localhost:3000/students/topper  
http://localhost:3000/students/average  
http://localhost:3000/students/count  
http://localhost:3000/students/1  
http://localhost:3000/students/branch/CSE  

---

## 🛠 Installation & Setup

### 🔧 Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### ▶️ Steps to Run Locally

1. Clone the repository

git clone https://github.com/your-username/student-cgpa-api.git  
cd student-cgpa-api  

2. Install dependencies

npm install  

3. Start the server

npm start  

Or for development:

npm run dev  

4. Server runs at:

http://localhost:3000  

---

## 📊 Student Data Sample

{
  id: 1,
  name: "Aarav Sharma",
  branch: "CSE",
  semester: 8,
  cgpa: 9.3
}

Available Branches:
CSE, IT, ECE, AI, Data Science

---

## 📌 HTTP Status Codes Used

| Status Code | Meaning      | Used In |
|------------|-------------|----------|
| 200        | OK          | All successful GET requests |
| 400        | Bad Request | Invalid student ID format |
| 404        | Not Found   | Student ID doesn't exist / No students available |

---

## 🔧 Middleware Configuration

- express.json() → Parses incoming JSON
- cors() → Enables Cross-Origin Resource Sharing
- Custom 404 handler → Handles undefined routes

---

## ☁ Deployment (Render)

1. Push project to GitHub
2. Go to https://render.com
3. Create New Web Service
4. Connect GitHub repository
5. Build Command: npm install
6. Start Command: npm start
7. Deploy

---

## 🧠 Technical Concepts Demonstrated

- RESTful API design
- Static and dynamic route parameters
- Array filtering & aggregation
- Data transformation
- Error handling
- HTTP status codes
- Middleware configuration
- CORS setup
- Deployment on cloud platform

---

## 🎓 Learning Outcomes

After completing this project, students understand:

- How to design RESTful GET APIs
- How to handle route parameters
- How to perform server-side filtering
- How to return structured JSON responses
- How to deploy backend APIs professionally
- How to document APIs properly

---

## 👨‍💻 Created By

Assignment 1 - Student CGPA API  
Course: Node.js Backend Development