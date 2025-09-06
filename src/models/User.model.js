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
    required: false, // not required at registration
    trim: true,
  },
  company: {
    type: String,
    required: false, // not required at registration
    trim: true,
  },
  location: {
    type: String,
    required: false, // not required at registration
    trim: true,
  },
  birthday: {
    type: Date,
    required: false, // not required at registration
    trim: true,
  },
  phone: {
    type: Number,
    required: false, // not required at registration
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
    profilePic: {
      type: String,
      default: "https://picum.photos/id/59/200/200",
      trim: true,
    },
  },
});

module.exports = mongoose.model("User", userSchema);
