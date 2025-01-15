const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3000;
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require('bcrypt');
const salt = 10;
// const {encrypt , decrypt} = require('./EncryptionHandler')



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


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });


app.post("/api/registered_events", upload.single("receipt"), (req, res) => {
  const { 
      businessName,
      contactPerson,
      phoneNumber,
      link,
      description,
      boothNumber,
      electricalOutlet
    } = req.body;
  const receiptPath = req.file ? req.file.path : null;
  // const { electricalOutlet } = req.body;


  if (!businessName || !contactPerson || !phoneNumber || !link || !description || !boothNumber || !receiptPath) {
    return res.status(400).send("All fields are required");
  }

  const sql = "INSERT INTO registered_events (business_name, contact_person, phone_number, link,description, electrical_outlet, booth_number, receipt_path) VALUES (?, ?, ?,?, ?, ?,?, ?)";
  const values = [businessName, contactPerson,phoneNumber,link,description, electricalOutlet, boothNumber,receiptPath];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error saving to database:", err);
      return res.status(500).send("Failed to save to database");
    }
    res.status(201).send("Event registered successfully");
  });
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")));








app.post('/signUp', (req,res)=>{
 

  const sql = "INSERT INTO users (Full_Name, username, password) VALUES (?)";
  const password = req.body.password;
  bcrypt.hash(password.toString(), salt, (err, hash) =>{
    if(err){
      console.log(err);
    }
    const values = [
      req.body.fullName,
      req.body.username,
      hash
    ]
    db.query(sql, [values],(err,data)=>{
      if(err){
        return res.json("Error");
      }
      res.status(201).send("User registered successfully");
    })
  })
})




app.get('/viewRegistration', (req, res) => {
  const sql = "SELECT *, CONCAT('http://localhost:3000/', receipt_path) AS receipt_url FROM registered_events";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});



app.post('/login', (req, res) => {




const { username, password } = req.body;

console.log("Received username:", username);
console.log("Received password:", password);

if (!username || !password) {
  return res.status(400).send("Username and Password are required");
}

const sql = "SELECT * FROM users WHERE username = ?";
db.query(sql, [username], async (err, results) => {
  if (err) {
    console.error("Database query error:", err);
    return res.status(500).send("An error occurred while logging in");
  }

  console.log("Query results:", results);

  if (results.length === 0) {
    console.log("No user found with the provided username");
    return res.status(401).send("Invalid username or password");
  }

  const user = results[0];
  console.log("Fetched Hashed Password from DB:", user.password);

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password Match Result:", isMatch);

    if (isMatch) {
      return res.status(200).send("Login successful");
    } else {
      console.log("Password does not match");
      return res.status(401).send("Invalid username or passwordd");
    }
  } catch (err) {
    console.error("Error comparing passwords:", err);
    return res.status(500).send("An error occurred while logging in");
  }
});
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
