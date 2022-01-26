const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = process.env.PORT || 3000;


// importing local module
const calculate = require(__dirname + "/logic.js");

let normal = calculate.calculationResult;
let percent = calculate.percentResult;
let changeSign = calculate.signResult;

// console.log(calculate)
// console.log(normal)

const app = express();

// needed to use EJS
app.set("view engine", "ejs");

// need to use "body"
app.use(bodyParser.urlencoded({extended: true}));

// used to style the pages
app.use(express.static("public"));

let result = 0;
// console.log(result)

app.get("/", function(req, res) {
    res.render("calculator", {
        calculatedOutput: result 
    });
})

app.post("/", function(req, res) {
    let display = req.body.result;
    result = normal(display);

    res.redirect("/");
})

app.post("/percentage", function(req, res) {
    let display = req.body.result;

    result = percent(display);

    res.redirect("/");
})

app.post("/signChange", function(req, res) {
    let display = req.body.result;

    result = changeSign(display);

    res.redirect("/");
})

app.listen(port, () => {
    console.log("Server is connected to port " + port);
})