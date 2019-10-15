const express = require('express');
const PORT = process.env.PORT || 6969;
const app = express();
// serving stativ content for our aop from public folder
app.use(express.static("public"));
// parse application body as a JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SET HANDLEBARS
const exphbs =require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// IMPORT THE ROUTES >> CONTROLLER
var routes = require('./controller/burgerThisIsHouston');
app.use(routes);

// LISTEN ON SERVER
app.listen(PORT, () => console.log(`Connected to port: ${PORT}`));