var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, function(){
    console.log("App is listening on PORT" + PORT);
})

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


