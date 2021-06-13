const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AnonymousMessages = new Schema({
    message: {type: String}
}
, {timestamps: true})


const User =  new Schema({
    fullname: {type: String},
    quote: {type: String},
    message: [AnonymousMessages],
    imageUrl: {type: String},
    imageId: {type:String}
})

module.exports = mongoose.model("User", User);