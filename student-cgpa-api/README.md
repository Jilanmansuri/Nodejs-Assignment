# Student CGPA API

## Objective

Build a REST API using **Express.js** that manages student CGPA records stored in an in-memory JSON array.

The API uses only GET routes and follows REST principles with proper HTTP status codes and error handling.

---

## Features

- ✅ In-memory JSON database with 10 student records
- ✅ 6 GET routes (4 static + 2 dynamic)
- ✅ Proper HTTP status codes
- ✅ CORS middleware enabled
- ✅ Express.json() middleware configured
- ✅ Error handling with appropriate responses

---

## Implemented Routes

### Static Routes

1. **GET `/students`**
   - Returns all students
   - Status Code: 200
   - Response: Full student array

2. **GET `/students/topper`**
   - Returns student with the highest CGPA
   - Status Code: 200 (if students exist), 404 (if empty)
   - Response: Single student object with highest CGPA

3. **GET `/students/average`**
   - Returns average CGPA of all students
   - Status Code: 200
   - Response Format:
     ```json
     {
       "averageCGPA": 8.55
     }
     ```

4. **GET `/students/count`**
   - Returns total number of students
   - Status Code: 200
   - Response Format:
     ```json
     {
       "totalStudents": 10
     }
     ```

### Dynamic Routes

5. **GET `/students/:id`**
   - Returns student by specific ID
   - Status Code: 200 (if found), 404 (if not found), 400 (if invalid ID)
   - Example: `GET /students/3`

6. **GET `/students/branch/:branchName`**
   - Returns all students from a specific branch
   - Status Code: 200
   - Returns empty array if no students found in that branch
   - Example: `GET /students/branch/CSE`

---

## Sample API URLs

### Local Testing
```
http://localhost:3000/students
http://localhost:3000/students/topper
http://localhost:3000/students/average
http://localhost:3000/students/count
http://localhost:3000/students/1
http://localhost:3000/students/3
http://localhost:3000/students/branch/CSE
http://localhost:3000/students/branch/IT
http://localhost:3000/students/branch/ECE
```

---

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/student-cgpa-api.git
   cd student-cgpa-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Server will run on:**
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
student-cgpa-api/
├── index.js           # Main Express application with all routes
├── package.json       # Project dependencies and scripts
├── .gitignore         # Git ignore file
└── README.md          # Project documentation
```

---

## Student Data Sample

The API includes 10 student records with the following structure:

```js
{
  id: 1,
  name: "Aarav Sharma",
  branch: "CSE",
  semester: 8,
  cgpa: 9.3
}
```

**Available Branches:** CSE, IT, ECE, AI, Data Science

---

## HTTP Status Codes Used

| Status Code | Meaning | Used In |
|-------------|---------|----------|
| 200 | OK | All successful GET requests |
| 400 | Bad Request | Invalid student ID format |
| 404 | Not Found | Student ID doesn't exist, No students available |

---

## Middleware Configuration

- **express.json()**: Parses incoming JSON requests
- **cors()**: Enables Cross-Origin Resource Sharing
- **Custom 404 handler**: Catches undefined routes

---

## Deployment

### Deploy on Render

1. Push your project to GitHub
2. Go to [Render](https://render.com)
3. Create a new Web Service
4. Connect your GitHub repository
5. Set Build Command: `npm install`
6. Set Start Command: `npm start`
7. Deploy and access your API

**Deployed API Example:**
```
https://student-cgpa-api.onrender.com
```

---

## Testing with Postman

1. Import the provided Postman collection
2. Test each route with sample requests
3. Verify status codes and response formats
4. Publish documentation publicly

---

## Technical Concepts Demonstrated

✅ RESTful API design  
✅ Static and dynamic route parameters  
✅ Array filtering and aggregation  
✅ Data transformation  
✅ Error handling and validation  
✅ HTTP status codes  
✅ Middleware configuration  
✅ CORS setup  

---

## Learning Outcomes

After completing this assignment, students will understand:

- How to design RESTful GET routes
- How to handle dynamic route parameters
- How to perform server-side filtering and aggregation
- How to return structured JSON responses
- How to deploy backend APIs professionally
- How to document APIs properly

---

## Created By

Assignment 1 - Student CGPA API  
Course: Node.js Backend Development

---
