const express = require("express");
const connectToDB = require("./src/config/db.js");
const libraryRouter = require("./src/routes/libraryRoute.js");

const app = express();
connectToDB();
app.use(express.json())
app.use ("/api/v1/library", libraryRouter);
app.post ("/api/v1/library/books", libraryRouter);
app.get("/books/checkout/:id", libraryRouter);
app.get("/books/return/:id", libraryRouter);
const port = 8000;

app.listen (port, () => {
        console.log("server is good");
})