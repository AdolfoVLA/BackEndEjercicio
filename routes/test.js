const express = require('express')
const router = express.Router();
const testController = require('../controllers/test')

router.post("/SumarValores", testController.sumarValores)
      .post("/InsertUserVLA", testController.insertUserVLA)

module.exports = router;