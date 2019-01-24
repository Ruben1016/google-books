const path = require("path");
const router = require("express").Router();
const books = require("./savebooks");
const google = require("./googlesearch");

// Saved
router.use("/saved", books);

// Google Routes
router.use("/google", google);

// For anything else, render the html page
router.use(function(req, res) {
 res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;