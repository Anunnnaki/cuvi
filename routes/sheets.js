const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const sheetCtrl = require("../controllers/spreadsheet")

router.post("/", sheetCtrl.writeSpreadsheet)
router.get("/", sheetCtrl.readSpreadsheet)

module.exports = router