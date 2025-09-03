const mongoose = require("mongoose");
const schema = mongoose.Schema;

const projectSchema = new schema ({
    name : {
        type: String,
        required: true,
        trim: true,
    },
    startTime : {
        type : Number,
        required: true,
        trim: true,
    },
    deadLine : {
        type : Number,
        required: true,
        trim: true,
    },
    priority : {
        type : String,
        required: true,
        trim: true,
    },
    assignee : {
        type : String,
        required: true,
        trim: true,
    },
    description : {
        type : String,
        required: true,
        trim: true,
    },
    status : {
        type : String,
        required: true,
        trim: true,
    }
})