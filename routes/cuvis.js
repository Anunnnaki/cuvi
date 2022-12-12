const express = require("express")
const router = express.Router()
const updateval = require("../middleware/updateval")
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const cuviCtrl = require("../controllers/cuvis")
const { validatorCreateCuvi, validatorGetCuvi } = require("../validator/cuvis")
/**
 *  List all cuvis
 */
router.get("/cuvis", authMiddleware, checkRol(["talent"]), cuviCtrl.getCuvis)
//router.get("/cuvis", authMiddleware, cuviCtrl.getCuvis)

/**
 * create one cuvi
 */
router.post("/cuvi", authMiddleware, updateval,validatorCreateCuvi, cuviCtrl.createCuvi)//updateval,

/**
 * get detail cuvi
 */
 router.get("/cuvi/:id", cuviCtrl.getCuvi)

/**
 * update one cuvi
 */ 
 router.put("/cuvi/:id", cuviCtrl.updateCuvi)
 router.put("/cuvi2/:id", cuviCtrl.updateCuvi)
/**
 * delete one cuvi
 */
 router.delete("/cuvi/:id", cuviCtrl.deleteCuvi)



module.exports = router