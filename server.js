const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static("./client/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/api/restaurants.json");
});

app.get("*", (req, res) => {
  res.send("The page you are looking for does not exist.");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
