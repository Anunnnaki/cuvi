const express = require("express")
const router = express.Router()

router.post("/", testCtrl.createTest)

module.exports = router