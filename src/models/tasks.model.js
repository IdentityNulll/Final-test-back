const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  taskGroup: {
    type: String,
    trim: true,
    required: false,
  },
  startTime: {
    type: String,
    required: true,
    trim: true,
  },
  endTime: {
    type: String,
    required: true,
    trim: true,
  },
  priority: {
    type: String,
    required: true,
    trim: true,
  },
  assignee: {
    type: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String,
    required: true,
    trim: true,
    enum : ["pending", "in-progress", "completed", "to do"],
    default: "to do"
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Projects",
    required: true,
  },
});

module.exports = mongoose.model("Tasks", taskSchema);
