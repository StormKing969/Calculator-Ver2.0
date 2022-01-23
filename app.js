const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const port = process.env.PORT || 3000;

const app = express();

// needed to use EJS
app.set("view engine", "ejs");

// need to use "body"
app.use(bodyParser.urlencoded({extended: true}));

// used to style the pages
app.use(express.static("public"));

let result = 0;
console.log(result)

app.get("/", function(req, res) {
    res.render("calculator", {
        calculatedOutput: result 
    });
})

app.post("/", function(req, res) {
    let display = req.body.result;

    let multiply = /X/;
    // let percentage = /%/;

    if(multiply.test(display) === true) {
        display = display.replace(multiply, "*");
    }

    // if(percentage.test(display) === true) {
    //     display = display.replace(percentage, "");
    //     display = display;
    // }
 
    result = eval(display);

    res.redirect("/");
})

app.listen(port, () => {
    console.log("Server is connected to port " + port);
})