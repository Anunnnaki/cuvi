const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

/**
 * Validator create test
 */

//console.log("validateResults")
const validatorCreateTest = [
check ("name").exists().notEmpty().isLength({min:1, max:90}),
check ("questions").exists().notEmpty(),
check ("comments").exists().notEmpty().isLength({min:1, max:500}),


(req, res, next) => {
    return validateResults(req, res, next)
    }
]

module.exports = {validatorCreateTest}