const Projects = require('../models/User.model');

const getProjects = async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createProject = async (req, res) => {
    const { name, startTime, deadLine, priority, assignee, description } = req.body;
    try {
        const newProject = new Projects({
            name,
            startTime,
            deadLine,
            priority,
            assignee,
            description
        });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProjectById = async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Project not found" });
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateProject = async (req, res) => {
    try {
        const updatedProject = await Projects.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedProject) return res.status(404).json({ message: "Project not found" });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProject = async (req, res) => {
    try {
        const deletedProject = await Projects.findByIdAndDelete(req.params.id);
        if (!deletedProject) return res.status(404).json({ message: "Project not found" });
        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProjects,
    createProject,
    getProjectById,
    updateProject,
    deleteProject
}