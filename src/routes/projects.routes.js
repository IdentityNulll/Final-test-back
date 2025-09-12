const express = require("express");
const router = express.Router();
const Project = require("../models/Projects.model");

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
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('tasks');  
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}); 
router.put("/updateProject/:id", updateProject);
router.delete("/deleteProject/:id", deleteProject);

module.exports = router;

