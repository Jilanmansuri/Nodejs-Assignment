# 🛒 E-Commerce Product API  
REST API built using Express.js (In-Memory Data)

---

## 📌 Objective

This project is a REST API built using Node.js + Express.js that manages product listings for an e-commerce platform using an in-memory JSON array.

The API implements:

- ✅ 3 GET routes  
- ✅ 1 POST route  
- ✅ 3 PUT routes  
- ✅ Proper HTTP status codes  
- ❌ No database  
- ❌ No authentication  
- ❌ No validation libraries  

---

# 🚀 Tech Stack

- Node.js
- Express.js
- CORS

---

# 📂 Project Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Jilanmansuri/Nodejs-Assignment.git
cd ecommerce-product-api
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Run Server

```bash
node index.js
```

Server runs on:

```
http://localhost:3001
```

Console Output:
```
Server started on port 3001
```

---

# 🏠 Base Route

### GET `/`

Returns simple message:

```
Express server is running
```

Status: `200 OK`

---

# 📦 Initial Product Data

The API starts with 5 predefined products stored in an in-memory array.

Product structure:

```js
{
  id: 1,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 25,
  rating: 4.3
}
```

---

# 📡 API Routes

---

## 🔹 GET Routes

### 1️⃣ GET `/products`

- Returns all products  
- Status Code: `200 OK`

---

### 2️⃣ GET `/products/:id`

Example:
```
GET /products/3
```

- Returns product by ID  
- If not found → `404 Not Found`

Error Response:
```json
{
  "message": "User not found"
}
```

---

### 3️⃣ GET `/products/category/:categoryName`

Example:
```
GET /products/category/Electronics
```

- Returns products by category (case-insensitive)  
- If not found → `404 Not Found`

---

# ➕ POST Route

### 4️⃣ POST `/products`

Request Body:
```json
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}
```

- Auto-generates ID  
- Adds product to array  
- Status `201 Created`

---

# 🔄 PUT Routes

### 5️⃣ PUT `/products/:id`

- Replaces entire product except ID  
- Status `200 OK`  
- If not found → `404 Not Found`

---

### 6️⃣ PUT `/products/:id/stock`

Request Body:
```json
{
  "stock": 60
}
```

- Updates only stock  
- Status `200 OK`

---

### 7️⃣ PUT `/products/:id/price`

Request Body:
```json
{
  "price": 1299
}
```

- Updates only price  
- Status `200 OK`

---

# 🧠 Concepts Used

- Express Routing  
- Middleware (`express.json()`, `cors()`)  
- Route Parameters  
- Array Methods (`find()`, `findIndex()`, `filter()`)  
- HTTP Status Codes  
- In-Memory Data Handling  

---

# 🧪 Postman Documentation

Postman API Documentation:  
<https://documenter.getpostman.com/view/50840642/2sBXcGEzkV>

---

# 🌐 Live API (Render Deployment)

Live API Base URL:  
<https://nodejs-assignment-1-v5lc.onrender.com>

---

# 📁 Submission Checklist

- [x] GitHub Repository  
- [x] README Updated  
- [x] Postman Documentation  
- [x] Render Deployment  
- [x] All 7 routes working  

---

# 👨‍💻 Author

Jilan Mansuri  
Node.js Assignment – E-Commerce Product API  
Year: 2026
