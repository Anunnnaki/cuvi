const express = require("express")
const router = express.Router()
const updateval = require("../middleware/updateval")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const cuviCtrl = require("../controllers/cuvis")
const { validatorCreateCuvi, validatorGetCuvi, val_PersonalData_Update } = require("../validator/cuvis")
/**
 *  List all cuvis
 */
router.get("/cuvis", authMiddleware, checkRol(["talent"]), cuviCtrl.getCuvis)
//router.get("/cuvis", authMiddleware, cuviCtrl.getCuvis)

/**
 * create one cuvi
 */
router.post("/cuvi", authMiddleware, checkRol(["talent"]), updateval, validatorCreateCuvi, cuviCtrl.createCuvi)//updateval,

/**
 * get detail cuvi
 */
 router.get("/cuvi/:id", authMiddleware, checkRol(["talent"]), cuviCtrl.getCuvi)

/**
 * update one cuvi
 */ 
 router.put("/cuvi/:id", authMiddleware, checkRol(["talent"]),  cuviCtrl.updateCuvi) //val_PersonalData_Update,
 router.put("/cuvi/ei/:id", authMiddleware, checkRol(["talent"]), cuviCtrl.updateCuvi)  //update education basic
 router.put("/cuvi/es/:id", authMiddleware, checkRol(["talent"]), cuviCtrl.updateCuvi) //update education high
 router.put("/cuvi/id/:id", authMiddleware, checkRol(["talent"]), cuviCtrl.updateCuvi) //update education lenguaje

 /**
 * delete one cuvi
 */
 router.delete("/cuvi/:id", cuviCtrl.deleteCuvi)



module.exports = router