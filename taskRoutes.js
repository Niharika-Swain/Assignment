const express = require("express");
const { createTask, updateTaskStatus, logWorkHours } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createTask);
router.put("/:id/status", authMiddleware, updateTaskStatus);
router.put("/:id/log", authMiddleware, logWorkHours);

module.exports = router;
