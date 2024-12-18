const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3000;
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "event"
});

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Mock database (replace with real DB logic)
// const registeredEvents = [];

// API to handle form submission
app.post("/api/registered_events", upload.single("receipt"), (req, res) => {
  const { username, eventName } = req.body;
  const receiptPath = req.file ? req.file.path : null;

  if (!username || !eventName || !receiptPath) {
    return res.status(400).send("All fields are required");
  }

  const sql = "INSERT INTO registered_events (username, event_name, receipt_path) VALUES (?, ?, ?)";
  const values = [username, eventName, receiptPath];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error saving to database:", err);
      return res.status(500).send("Failed to save to database");
    }
    res.status(201).send("Event registered successfully");
  });
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));






app.get('/', (req, res) => {
    res.send("From Backend Side");
});

app.get('/viewRegistration', (req, res) => {
  const sql = "SELECT *, CONCAT('http://localhost:3000/', receipt_path) AS receipt_url FROM registered_events";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
