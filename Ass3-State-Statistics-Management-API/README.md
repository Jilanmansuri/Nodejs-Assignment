# 🗺️ State Statistics Management API  
REST API built using Express.js (In-Memory Data)

---

## 📌 Objective

This project is a complete REST API built using Node.js + Express.js that manages statistical data of Indian states using an in-memory JSON array.

The API implements:

- ✅ 3 GET routes  
- ✅ 1 POST route  
- ✅ 3 PUT routes  
- ✅ 3 PATCH routes  
- ✅ 3 DELETE routes  
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
git clone https://github.com/your-username/state-statistics-api.git
cd state-statistics-api
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Run Server

```bash
node server.js
```

Server runs on:

```
http://localhost:3000
```

Console Output:
```
Server started on port 3000
```

---

# 🏠 Base Route

### GET `/`

Returns simple message:

```
State API Running
```

Status: `200 OK`

---

# 📊 Initial State Data

The API starts with predefined Indian states stored in an in-memory array.

State structure:

```js
{
  id: 1,
  name: "Gujarat",
  population: 63872399,
  literacyRate: 78.03,
  annualBudget: 243965,
  gdp: 21000000
}
```

---

# 📡 API Routes

---

## 🔹 GET Routes

### 1️⃣ GET `/states`

- Returns all states  
- Status Code: `200 OK`

---

### 2️⃣ GET `/states/:id`

Example:
```
GET /states/5
```

- Returns state by ID  
- If not found → `404 Not Found`

Error Response:
```json
{
  "message": "State not found"
}
```

---

### 3️⃣ GET `/states/highest-gdp`

- Returns state with highest GDP  
- Status Code: `200 OK`

---

# ➕ POST Route

### 4️⃣ POST `/states`

Request Body:
```json
{
  "name": "Example State",
  "population": 12345678,
  "literacyRate": 75.5,
  "annualBudget": 200000,
  "gdp": 9000000
}
```

- Auto-generates ID  
- Adds state to array  
- Status `201 Created`

---

# 🔄 PUT Routes

### 5️⃣ PUT `/states/:id`

- Replaces entire state except ID  
- Status `200 OK`  
- If not found → `404 Not Found`

---

### 6️⃣ PUT `/states/:id/budget`

Request Body:
```json
{
  "annualBudget": 300000
}
```

- Updates only annual budget  
- Status `200 OK`

---

### 7️⃣ PUT `/states/:id/population`

Request Body:
```json
{
  "population": 50000000
}
```

- Updates only population  
- Status `200 OK`

---

# 🩹 PATCH Routes

### 8️⃣ PATCH `/states/:id/literacy`

```json
{
  "literacyRate": 85.4
}
```

- Updates literacy rate only  
- Status `200 OK`

---

### 9️⃣ PATCH `/states/:id/gdp`

```json
{
  "gdp": 25000000
}
```

- Updates GDP only  
- Status `200 OK`

---

### 🔟 PATCH `/states/:id`

```json
{
  "annualBudget": 280000
}
```

- Partially updates any provided field  
- Status `200 OK`

---

# 🗑 DELETE Routes

### 1️⃣1️⃣ DELETE `/states/:id`

- Deletes state by ID  
- Status `204 No Content`  
- If not found → `404 Not Found`

---

### 1️⃣2️⃣ DELETE `/states/name/:stateName`

- Deletes state by name (case-insensitive)  
- Status `204 No Content`

---

### 1️⃣3️⃣ DELETE `/states/low-literacy/:percentage`

Example:
```
DELETE /states/low-literacy/70
```

Response:
```json
{
  "deletedCount": 3
}
```

- Deletes all states below given literacy percentage  
- Status `200 OK`

---

# 🧠 Concepts Used

- Express Routing  
- Middleware (`express.json()`, `cors()`)  
- Route Parameters  
- Array Methods (`find()`, `findIndex()`, `reduce()`, `filter()`)  
- PUT vs PATCH Difference  
- HTTP Status Codes  
- In-Memory Data Handling  

---

# 🧪 Postman Documentation

Postman API Documentation:  
<https://documenter.getpostman.com/view/50840642/2sBXcHhyWc>

---

# 🌐 Live API (Render Deployment)

Live API Base URL:  
<https://nodejs-assignment-2-zyac.onrender.com>

---

# 📁 Submission Checklist

- [x] GitHub Repository  
- [x] README Updated  
- [x] Postman Documentation  
- [x] Render Deployment  
- [x] All 13 routes working  

---

# 👨‍💻 Author

Jilan Mansuri  
Node.js Assignment – State Statistics Management API  
Year: 2026