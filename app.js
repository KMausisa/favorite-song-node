const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// import route files
const adminRoutes = require("./routes/admin");
const songsRoutes = require("./routes/songs");
const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(songsRoutes);
app.use(authRoutes);

app.listen(5050);
