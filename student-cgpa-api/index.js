const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// In-memory JSON database
const students = [
  {
    id: 1,
    name: "Aarav Sharma",
    branch: "CSE",
    semester: 8,
    cgpa: 9.3
  },
  {
    id: 2,
    name: "Ishita Verma",
    branch: "IT",
    semester: 7,
    cgpa: 8.9
  },
  {
    id: 3,
    name: "Rohan Kulkarni",
    branch: "ECE",
    semester: 6,
    cgpa: 8.4
  },
  {
    id: 4,
    name: "Meera Iyer",
    branch: "CSE",
    semester: 8,
    cgpa: 9.1
  },
  {
    id: 5,
    name: "Kunal Deshmukh",
    branch: "IT",
    semester: 5,
    cgpa: 7.8
  },
  {
    id: 6,
    name: "Ananya Reddy",
    branch: "CSE",
    semester: 6,
    cgpa: 8.7
  },
  {
    id: 7,
    name: "Vikram Patil",
    branch: "ECE",
    semester: 7,
    cgpa: 8.2
  },
  {
    id: 8,
    name: "Priyanka Nair",
    branch: "AI",
    semester: 4,
    cgpa: 8.8
  },
  {
    id: 9,
    name: "Harsh Mehta",
    branch: "Data Science",
    semester: 5,
    cgpa: 8.0
  },
  {
    id: 10,
    name: "Neha Gupta",
    branch: "CSE",
    semester: 6,
    cgpa: 7.9
  }
];

// Route 1: GET /students - Return all students
// Status Code: 200
app.get("/students", (req, res) => {
  res.status(200).json(students);
});

// Route 2: GET /students/topper - Return student with highest CGPA
// Status Code: 200 if found, 404 if no students exist
app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const topper = students.reduce((prev, current) => {
    return prev.cgpa > current.cgpa ? prev : current;
  });

  res.status(200).json(topper);
});

// Route 3: GET /students/average - Return average CGPA of all students
// Status Code: 200
app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(200).json({ averageCGPA: 0 });
  }

  const totalCGPA = students.reduce((sum, student) => sum + student.cgpa, 0);
  const averageCGPA = (totalCGPA / students.length).toFixed(2);

  res.status(200).json({ averageCGPA: parseFloat(averageCGPA) });
});

// Route 4: GET /students/count - Return total number of students
// Status Code: 200
app.get("/students/count", (req, res) => {
  res.status(200).json({ totalStudents: students.length });
});

// Route 5: GET /students/:id - Return student by ID (Dynamic Route)
// Status Code: 200 if found, 404 if not found
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);

  // Validate that ID is a number
  if (isNaN(studentId)) {
    return res.status(400).json({ message: "Invalid student ID" });
  }

  const student = students.find((s) => s.id === studentId);

  if (!student) {
    return res.status(404).json({ message: `Student with ID ${studentId} not found` });
  }

  res.status(200).json(student);
});


// Route 6: GET /students/branch/:branchName - Return all students from a specific branch (Dynamic Route)
// Status Code: 200, returns empty array if no students found in that branch
// Note: Case-sensitive search - branch names should match as provided in data
app.get("/students/branch/:branchName", (req, res) => {
  const branchName = req.params.branchName;

  const branchStudents = students.filter((s) => s.branch === branchName);

  // Returns empty array if no students found (as per REST principle of graceful degradation)
  // Justification: Returning empty array is more RESTful as it indicates "no results" rather than "not found"
  res.status(200).json(branchStudents);
});

// 404 Not Found middleware (must be at the end)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 3000;



app.listen(3001, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
