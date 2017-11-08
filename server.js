var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var burgersController = require("./controllers/burgersController.js");
var burger = require("./models/burger.js");


var port = process.env.PORT || 3000;
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    burger.all(function(data) {
      res.render("index", {burgers: data});
    });
  });

app.use("/api/burgers", burgersController);

app.listen(port);
