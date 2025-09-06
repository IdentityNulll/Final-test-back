const mongoose = require('mongoose');
const schema = mongoose.Schema;


const eventSchema = new schema( {
    name : {
        type: String,
        required: true,
        trim: true,
    },
    date : {
        type: String,
        required: true,
        default:Date.now,
        trim: true,
    }
})

module.exports = mongoose.model("Events",eventSchema)