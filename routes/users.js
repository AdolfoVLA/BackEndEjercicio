const express = require('express')
const router = express.Router();

const userController = require('../controllers/user')
const {validateLogin} = require('../middlewares/validators/UserValidator')
const {validateCreateUser} = require("../middlewares/validators/CreateUserValidator")
const {validateDeleteUser} = require("../middlewares/validators/DeleteUserValidator")

router.post("/UserLogin", validateLogin, userController.Login)
      .post("/CreateUser", validateCreateUser,userController.CreateUser)
      .delete("/DeleteUser", validateDeleteUser, userController.DeleteUser)
      .post("/EditUser", userController.UpdateUserByUserName)

module.exports = router;