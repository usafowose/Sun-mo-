// Declaring app dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');
var moment = require('moment'); 

// First instantiation of express
var app = express();

// 
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "192.168.99.100",
    port: 3306,
    user: "root",
    password: "docker",
    database: "ext_fam"
});

connection.connect(err => {
    if (err) {
        console.log(`Error COnnecting: ${err.stack}`);
    }
    console.log(`Connected as ID ${connection.threadId}`);
});

// ROUTES






app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
}); 