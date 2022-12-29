const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const testCtrl = require("../controllers/tests")

//const { validatorCreateTest, validatorGetTest } = require("../validator/tests")

//const { validatorCreateCuvi, validatorGetCuvi, val_PersonalData_Update } = require("../validator/cuvis")
/**
 *  List all cuvis
 */
//router.get("/tests", authMiddleware, checkRol(["talent"]), cuviCtrl.getCuvis)
//router.get("/cuvis", authMiddleware, cuviCtrl.getCuvis)

/**
 * create one cuvi
 */
router.post("/", testCtrl.createTest)//authMiddleware, checkRol(["talent"]), validatorCreateTest, 

/**
 * get detail cuvi
 
 router.get("/cuvi/:id", cuviCtrl.getCuvi)

/**
 * update one cuvi
 *
 router.put("/cuvi/:id", authMiddleware, checkRol(["talent"]), val_PersonalData_Update, cuviCtrl.updateCuvi)
/**
 * delete one cuvi
 */
 //router.delete("/cuvi/:id", cuviCtrl.deleteCuvi)



module.exports = router