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
- ✅ REST principles  


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

Or (if using nodemon):

```bash
npx nodemon index.js
```

Server runs on:

```
http://localhost:5000
```

---

# 📦 Product Structure

Each product follows this format:

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

Get all products.

- Status Code: `200 OK`
- Returns full product array

---

### 2️⃣ GET `/products/:id`

Get product by ID.

Example:
```
GET /products/3
```

- If found → `200 OK`
- If not found → `404 Not Found`

---

### 3️⃣ GET `/products/category/:categoryName`

Get products by category.

Example:
```
GET /products/category/Electronics
```

- Returns filtered array
- If none found → returns empty array `[]`
- Status `200 OK`

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

- Auto-generates ID
- Pushes into array
- Returns created product
- Status `201 Created`

---

# 🔄 PUT Routes

### 5️⃣ PUT `/products/:id`

Replace entire product (except ID).

- If found → `200 OK`
- If not found → `404 Not Found`

---

### 6️⃣ PUT `/products/:id/stock`

Update only stock value.

Request Body:
```json
{
  "stock": 60
}
```

- Returns updated product
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

- Returns updated product
- If not found → `404 Not Found`
- Status `200 OK`

---

# 🧠 Features Implemented

- Route parameters (`req.params`)
- Request body handling (`req.body`)
- Array methods (`find()`, `filter()`)
- Proper status codes (`200`, `201`, `404`)
- RESTful route design
- CORS enabled
- In-memory data handling

---

# 🧪 Postman Documentation

Postman Collection Link:
```
<Add your Postman documentation link here>
```

---

# 🌐 Live Deployment

Render Deployment Link:
```
<Add your Render deployed API link here>
```

---

# 📁 Submission Checklist

- [x] GitHub Repository  
- [x] README with all routes  
- [x] Postman Documentation  
- [x] Render Deployment  
- [x] All 7 routes working  

---

# 👨‍💻 Author

Your Name  
Course Name  
Year  
