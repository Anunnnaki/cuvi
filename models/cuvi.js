const mongoose = require("mongoose")

const CuviScheme = new mongoose.Schema(
    {
        id_user: {
             type: String,
             unique: true,
             requerided: true
             },
        personal_data: {
           
/**
 * id_user: {
 * type: String,
 * unique: true,
 * requerided: true
 * },
 * 
 */
 

            
            name: {
                type: String,
                requerired: true
            }/*,
            first_secondname: {
                type: String
            },
            typeid: {
                type: ["cc", "ce", "pas"],
                default: "cc"
            }
        */
        }
        
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("cuvis", CuviScheme)