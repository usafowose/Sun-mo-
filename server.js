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
app.get("/birthdays", (req, res) => {
    var family = "Fowose";

    connection.query(`SELECT * FROM ${family}`, (err, data) => {
        if (err) throw err;

        // console.log(data);

        var bdayData = [];

        for (i = 0; i < data.length; i++) {
            var currentBday = data[i].dob
            var currentMomentBday = moment(currentBday).format("MMMM Do YYYY");

            data[i] = {
                id: data[i].id,
                name: data[i].name,
                dob: currentMomentBday
            };

            console.log(data[i]);


            // console.log(currentMomentBday); 
            bdayData.push(data[i]);

        };
        res.render("bdaze", { person: bdayData });

    })

})




app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
}); 