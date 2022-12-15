const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

/**
 * Validator create cuvi
 */

//console.log("validateResults")
const validatorCreateCuvi = [
check ("id_user").exists().notEmpty().isLength({min:10, max:90}),
check("personal_data"),
check("personal_data.name").exists().notEmpty().isLength({min:3, max:90}),
check("personal_data.first_secondname").exists().notEmpty().isLength({min:2, max:90}),
check("personal_data.second_secondname"),
check("personal_data.typeid").exists().notEmpty().isLength({min:2, max:3}),
check("personal_data.id_number").exists().notEmpty().isLength({min:6, max:20}),
check("personal_data.sex").exists().notEmpty().isLength({min:1, max:1}),
check("personal_data.nacionality").exists().notEmpty().isLength({min:1, max:90}),
check("personal_data.country").exists().notEmpty().isLength({min:1, max:90}),
check("personal_data.military_card").exists().notEmpty().isLength({min:1, max:20}),
check("personal_data.date_place_birth").exists().notEmpty().isLength({min:1, max:20}),
check("personal_data.correspondence_address.email").exists().notEmpty().isLength({min:1, max:90}).isEmail(),
check("personal_data.correspondence_address").exists().notEmpty().isLength({min:1, max:90}),
/**
 * Academy Education
 */
 check("academic_training.basic_half_education"),
 check("academic_training.superior_education"),
 check("academic_training.idioms"),

 /**
 *  Work Experience
 */
  check("work_experience"),
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
/**
 * Validator update personal data cuvi
 */

    const val_PersonalData_Update = [
        check("personal_data.photo").isLength({min:20, max:250}),
        check("personal_data.name").exists().notEmpty().isLength({min:2, max:90}),
        check("personal_data.first_secondname").exists().notEmpty().isLength({min:2, max:90}),
        check("personal_data.second_secondname"),
check("personal_data.typeid").exists().notEmpty().isLength({min:2, max:3}),
check("personal_data.id_number").exists().notEmpty().isLength({min:6, max:20}),
check("personal_data.sex").exists().notEmpty().isLength({min:1, max:1}),
check("personal_data.nacionality").exists().notEmpty().isLength({min:1, max:90}),
check("personal_data.country").exists().notEmpty().isLength({min:1, max:90}),
check("personal_data.military_card").exists().notEmpty().isLength({min:1, max:20}),
check("personal_data.date_place_birth").exists().notEmpty().isLength({min:1, max:20}),
check("personal_data.correspondence_address.email").exists().notEmpty().isLength({min:1, max:90}).isEmail(),
check("personal_data.correspondence_address").exists().notEmpty().isLength({min:1, max:90}),

        (req, res, next) => {
        return validateResults(req, res, next)
        }
        
        ]
module.exports = {val_PersonalData_Update,validatorCreateCuvi, validatorGetCuvi}