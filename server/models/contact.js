var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    objectId = mongoose.Schema.ObjectId;

var contactSchema = new Schema({
    _id: {
        type: objectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    }
}, {
    versionKey: false
});

var contact = mongoose.model('contacts', contactSchema);

module.exports = contact;