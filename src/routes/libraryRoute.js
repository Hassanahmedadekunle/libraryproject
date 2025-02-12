const express = require("express");
const libraryController =  require("../controllers/libraryController");
const { listIndexes } = require("../models/library");
const libraryRouter = express.Router();
libraryRouter.get("/", libraryController.fetchAllBooks);
libraryRouter.post("/", libraryController.addNewBook);
libraryRouter.get("/",libraryController.findABook);
libraryRouter.get("/",libraryController.returnABook);

module.exports = libraryRouter;