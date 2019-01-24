const router = require("express").Router();
const books = require("../../controllers/books");

// Matches with "/api/books"
router.route("/")
 .get(books.findAll)
 .post(booksr.create);

// Matches with "/api/books/:id"
router
 .route("/:id")
 .get(books.findById)
 .put(books.update)
 .delete(books.remove);

module.exports = router;