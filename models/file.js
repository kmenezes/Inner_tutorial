var mongoose = require('mongoose');
var FileSchema = mongoose.Schema({
    location: {
        type: String,
        index: true
    },
    folder: {
        type: String
    },
    name: {
        type: String
    },
    created: {
        type: Date
    },
    inuse: {
        type: Boolean
    }
});


var File = module.exports = mongoose.model('Scanned_Plans', FileSchema);
