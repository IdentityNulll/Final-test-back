const express = require("express")

const {getProjects, createProjects, getProjectById, updateProject, deleteProject} = require("../controllers/projects.controller")


router.post("/createProject", createProjects)
router.get("/projects", getProjects)
router.get("/getById", getProjectById)
router.put("/updateProject", updateProject)
router.delete("/deleteProject", deleteProject)

module.exports = router;