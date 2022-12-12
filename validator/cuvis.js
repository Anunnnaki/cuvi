const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

/**
 * Validator create cuvi
 */

//console.log("validateResults")
const validatorCreateCuvi = [
check ("id_user"),
check("personal_data.name").exists().notEmpty().isLength({min:3, max:90}),
(req, res, next) => {
return validateResults(req, res, next)
}

]


/**
 * Validator get cuvi
 */

 const validatorGetCuvi = [
    
    check("personal_data.name").exists().notEmpty().isLength({min:6, max:90}),
    (req, res, next) => {
    return validateResults(req, res, next)
    }
    
    ]
module.exports = {validatorCreateCuvi, validatorGetCuvi}