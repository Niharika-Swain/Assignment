const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, assignedTo } = req.body;

    const task = new Task({
      title,
      description,
      assignedBy: req.user.id,
      assignedTo,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to update status", error });
  }
};

exports.logWorkHours = async (req, res) => {
  try {
    const { hours } = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, { $inc: { hoursLogged: hours } }, { new: true });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Failed to log hours", error });
  }
};
