const Book = require("../models/library");

   // add new book


exports.addNewBook = async (req,res) =>{
    try {
        const { title, author, stockQuantity, checkedOutQuantity} = req.body;
        const book = new Book({title, author, stockQuantity,checkedOutQuantity});
        const existingBook = await Book.findOne({ title: new RegExp(`^${title}$`, "i") });
        if (existingBook) {
        return res.status(400).json({ message: "Book is already added" });
        }

        await book.save();
        res.status(201).json(book);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    
};
// Fetch all Books
exports.fetchAllBooks = async (req,res) =>{
    try {

        let allBooks = await Book.find({title});
        console.log(allBooks);
        res.send("this is all the books");
    } catch (err){
        console.log(err);
        res.send("there is an error here");

    }
}
// Check out a book
exports.findABook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: "Book not found" });
      if (book.stockQuantity - book.checkedOutQuantity <= 0)
        return res.status(400).json({ message: "No available copies" });
      book.checkedOutQuantity += 1;
      await book.save();
      res.json(book);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  // Return a book
    exports. returnABook = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: "Book not found" });
      if (book.checkedOutQuantity > 0) {
        book.checkedOutQuantity -= 1;
        await book.save();
        res.json(book);
      } else {
        res.status(400).json({ message: "No books to return" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  