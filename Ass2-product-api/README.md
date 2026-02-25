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
git clone <your-github-repo-link>
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

---

### 1️⃣ GET `/products`

Get all products.

- Status Code: `200 OK`
- Returns full products array

---

### 2️⃣ GET `/products/:id`

Get product by ID.

Example:
```
GET /products/3
```

- If found → `200 OK`
- If not found → `404 Not Found`

Error Response:
```json
{
  "message": "User not found"
}
```

---

### 3️⃣ GET `/products/category/:categoryName`

Get products by category (case-insensitive).

Example:
```
GET /products/category/Electronics
```

- If products found → `200 OK`
- If none found → `404 Not Found`
- Returns filtered array

---

# ➕ POST Route

### 4️⃣ POST `/products`

Add a new product.

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

Features:

- Auto-generates ID (last ID + 1)
- Pushes into in-memory array
- Returns created product
- Status `201 Created`

---

# 🔄 PUT Routes

---

### 5️⃣ PUT `/products/:id`

Replace entire product (except ID).

- ID remains unchanged
- All other fields replaced
- If not found → `404 Not Found`

Error Response:
```json
{
  "message": "Product not found"
}
```

Status: `200 OK`

---

### 6️⃣ PUT `/products/:id/stock`

Update only stock value.

Request Body:
```json
{
  "stock": 60
}
```

- Updates only stock field
- If not found → `404 Not Found`
- Status `200 OK`

---

### 7️⃣ PUT `/products/:id/price`

Update only price value.

Request Body:
```json
{
  "price": 1299
}
```

- Updates only price field
- If not found → `404 Not Found`
- Status `200 OK`

---

# 🧠 Concepts Used

- Express routing
- Route parameters (`req.params`)
- Request body (`req.body`)
- Array methods (`find()`, `findIndex()`, `filter()`)
- HTTP status codes (`200`, `201`, `404`)
- CORS middleware
- In-memory data handling

---

# 🧪 Postman Documentation

Add your Postman Documentation link here:
```
<Add your Postman documentation link>
```

---

# 🌐 Render Deployment

Add your Render deployed API link here:
```
<Add your Render link>
```

---

# 📁 Submission Checklist

- [x] GitHub Repository  
- [x] README Updated  
- [x] Postman Documentation  
- [x] Render Deployment  
- [x] All 7 routes working  

---

# 👨‍💻 Author

Your Name  
Course Name  
Year  
