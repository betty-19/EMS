const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = 3000;

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "event"
});

app.get('/', (req, res) => {
    res.send("From Backend Side");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users;";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
