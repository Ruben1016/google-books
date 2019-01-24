var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

var bookSchema = new Schema ({
    title: {type: String, required: true},
    authors: {type: [String], required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true}
})

var Books = mongoose.model("Books", bookSchema)

module.exports = Books