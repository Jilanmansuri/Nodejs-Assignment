# 🚀 Node.js Assignments – REST API Projects

This repository contains two REST API projects built using Express.js with in-memory JSON data.

---

# 📦 Assignment 1 – 🎓 Student CGPA API

## 📌 Description
A REST API that manages student CGPA records using an in-memory JSON array.  
Includes static and dynamic GET routes with proper HTTP status codes and error handling.

## 🌐 Live API
<https://nodejs-assignment-t5ij.onrender.com>

## 🧪 Postman Documentation
<https://documenter.getpostman.com/view/50840642/2sBXcEmgCo>

## 🔹 Implemented Routes

1. GET `/students` – Get all students  
2. GET `/students/topper` – Get student with highest CGPA  
3. GET `/students/average` – Get average CGPA  
4. GET `/students/count` – Get total students count  
5. GET `/students/:id` – Get student by ID  
6. GET `/students/branch/:branchName` – Get students by branch  

---
---

# 🛒 Assignment 2 – E-Commerce Product API

## 📌 Description
A REST API that manages product listings for an e-commerce platform using an in-memory JSON array.  
Supports GET, POST, and PUT routes following REST principles.

## 🌐 Live API
<https://nodejs-assignment-1-v5lc.onrender.com>

## 🧪 Postman Documentation
<https://documenter.getpostman.com/view/50840642/2sBXcGEzkV>

## 🔹 Implemented Routes

1. GET `/products` – Get all products  
2. GET `/products/:id` – Get product by ID  
3. GET `/products/category/:categoryName` – Get products by category  
4. POST `/products` – Create new product  
5. PUT `/products/:id` – Replace entire product  
6. PUT `/products/:id/stock` – Update product stock  
7. PUT `/products/:id/price` – Update product price  

---
---


# 🗺️ Assignment 3 – State Statistics Management API

## 📌 Description
A complete REST API that manages statistical data of Indian states using an in-memory JSON array.  
Implements full REST architecture including GET, POST, PUT, PATCH, and DELETE routes with proper HTTP status codes and dynamic route handling.

---

## 🌐 Live API
<https://nodejs-assignment-2-zyac.onrender.com>

---

## 🧪 Postman Documentation
<https://documenter.getpostman.com/view/50840642/2sBXcHhyWc>

---

## 🔹 Implemented Routes

### 🔹 GET Routes

1. GET `/states` – Get all states  
2. GET `/states/:id` – Get state by ID  
3. GET `/states/highest-gdp` – Get state with highest GDP  

---

### 🔹 POST Route

4. POST `/states` – Create new state  

---

### 🔹 PUT Routes

5. PUT `/states/:id` – Replace entire state  
6. PUT `/states/:id/budget` – Update annual budget  
7. PUT `/states/:id/population` – Update population  

---

### 🔹 PATCH Routes

8. PATCH `/states/:id/literacy` – Update literacy rate  
9. PATCH `/states/:id/gdp` – Update GDP  
10. PATCH `/states/:id` – Partially update any field  

---

### 🔹 DELETE Routes

11. DELETE `/states/:id` – Delete state by ID  
12. DELETE `/states/name/:stateName` – Delete state by name  
13. DELETE `/states/low-literacy/:percentage` – Delete states below literacy threshold  

---

## 🛠 Tech Stack Used

- Node.js  
- Express.js  
- CORS  
- In-Memory JSON Data  
- RESTful API Design  

---

# 👨‍💻 Author

Node.js Backend Development Assignments  
Year: 2026  
