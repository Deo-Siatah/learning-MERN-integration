const express = require('express');
const {createTask, getMyTasks,getAllTasks,updateTask,deleteTask} = require('../controllers/taskController');
const {protect,authorize} = require("../middleware/auth")
const router = express.Router();

//add Task
router.post("/",protect,createTask);

//get your task
router.get("/me",protect,getMyTasks);

//acess all tasks 
router.get("/all",protect,authorize(["admin"]), getAllTasks);

router.put("/:id",protect,updateTask);
router.delete("/:id",protect,deleteTask);
module.exports = router;
