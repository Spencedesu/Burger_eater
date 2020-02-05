const express = require('express');
const mysql = require('mysql')

const PORT = process.env.PORT || 8080;

const app = express();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Fall2019",
  database: "burger_db"
});

app.get("/burgers", function(req, res) {
  connection.query("SELECT * FROM burgers ORDER BY id")
})
