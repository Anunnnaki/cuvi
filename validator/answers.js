const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

/**
 * Validator create test
 */

//console.log("validateResults")
const validatorAnswers = [

   
check ("id_user").exists().notEmpty().isLength({min:1, max:90}),
check ("answers").exists().notEmpty(),
check ("comments"),


(req, res, next) => {
    return validateResults(req, res, next)
    }
]

module.exports = {validatorAnswers}