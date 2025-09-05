const express = require("express");
const router = express.Router();

const {
  getProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controllers/projects.controller");

// Routes
router.post("/createProject", createProject);
router.get("/projects", getProjects);
router.get("/getById/:id", getProjectById); // usually you pass :id
router.put("/updateProject/:id", updateProject);
router.delete("/deleteProject/:id", deleteProject);

module.exports = router;

