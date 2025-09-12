const express = require("express");
const router = express.Router();
const {createTask, getTasksByProject} = require("../controllers/tasks.controller");

router.post("/createTask/:projectId", createTask);

router.get("/tasks/:projectId", getTasksByProject);


module.exports = router;