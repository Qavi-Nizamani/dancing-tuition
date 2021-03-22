const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//EXPRESS SPECIFIC
app.use("/static", express.static("static")); //Set the static path

//PUG SPECIFIC
app.set("view engine", "pug"); //Set the view engine as PUG engine
app.set("views", path.join(__dirname, "views")); // Set the view directory

//END POINTS
app.get("/", (req, res) => {
  res.status(200).render("home"); // Rendering the pug template
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact"); // Rendering the pug template
});

//LISTEN TO THE SERVER
app.listen(port, () => {
  console.log("listening to the port " + port);
});
