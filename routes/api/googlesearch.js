const router = require("express").Router();
const google = require("../../controllers/google");


router
 .route("/")
 .get(google.findAll);

module.exports = router;