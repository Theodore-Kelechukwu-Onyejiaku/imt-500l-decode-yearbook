const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");


/* GET users listing. */
router.get('/users', userController.allUsers);
router.post("/users/", userController.addPhoto);


module.exports = router;