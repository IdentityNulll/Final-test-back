const Task = require("../models/tasks.model");
const Project = require("../models/Projects.model");



exports.createTask = async (req, res) => {
    try {
        const {projectId} = req.params;
        const { title, taskGroup, startTime, endTime, priority, assignee, status, description } = req.body;

        const task = await Task.create({
            title,
            taskGroup,
            startTime,
            endTime,
            priority,
            assignee,
            status,
            description,
            project : projectId
        });

        await Project.findByIdAndUpdate(projectId, { $push: { tasks: task._id } });

        res.status(201).json(task);
    }catch (error) {
        res.status(500).json({error: error.message});
    }
}


exports.getTasksByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId)
      .populate({
        path: 'tasks',
        populate: { path: 'assignee', select: 'name email profilePic' }
      });

    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project.tasks);
  } catch (error) {
    res.status(500).json({ error: error.message, possibleError: "Error getting the tasks" });
  }
};
