const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");


/* GET users listing. */
router.get('/users', userController.allUsers);
router.post("/users/", userController.addPhoto);
router.get("/users/:id", userController.getSingleUser);
router.post("/users/:id/message", userController.sendMessage)

module.exports = router;