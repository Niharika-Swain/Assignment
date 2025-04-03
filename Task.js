const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["Pending", "In Progress", "Completed", "Delayed"], default: "Pending" },
  hoursLogged: { type: Number, default: 0 },
});

module.exports = mongoose.model("Task", TaskSchema);
