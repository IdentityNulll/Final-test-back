const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
      if (value > 70) {
        throw new Error("bruhh you are dead man what are you doing here");
      }
    },
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  birthday: {
    type: Date,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
  },
  tasks: {
    backlogTasks: {
      type: Number,
      default: 0,
      trim: true,
    },
    taskInProgress: {
      type: Number,
      default: 0,
      trim: true,
    },
    taskInReview: {
      type: Number,
      default: 0,
      trim: true,
    },
  },
});
