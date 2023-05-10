const express = require("express");
const cors = require("cors");
const { connection } = require("./database/db");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Settings
const PORT = process.env.PORT || 3001;

//Rutas
app.get("/", (req, res) => {
  res.redirect("/api");
});

app.use("/api/countries", require("./routes/countries"));

app.listen(PORT, () => {
  console.log(`Server Runing on port ${PORT}`);
  connection.authenticate().then(() => {
    console.log("Database Connected Sucesfully");
  });
});
