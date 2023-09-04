const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connecDb = require('./config/dbConnection');

const dotenv = require("dotenv").config()

connecDb();
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json()); // This will let you give requests
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})