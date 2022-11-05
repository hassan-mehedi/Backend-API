// Import Packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const compress = require("compression");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// Import Necessary Files
const config = require("./config/config");

// Calling middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());

// Import Routes
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");

// Implement Routes
app.use("/api/user", userRoutes);
app.use("/auth", authRoutes);

// connect to the database
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
    .connect(config.mongooseURI, options)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err));

// Root route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the api page" });
});

// Listen to the PORT
app.listen(config.port, () => {
    console.log(`Backend running at port: ${config.port}`);
});
