const mongoose = require("mongoose")

const CuviScheme = new mongoose.Schema(
    {
        id_user: {
             type: String,
             unique: true,
             requerided: true
             },
        personal_data: {
         name: {
        type: String,
        requerired: true
         },
        photo: { type: String },
        first_secondname: {
        type: String,
        requerired: true

        },
        second_secondname: {
        type: String
        },
        typeid: {
        type: ["cc", "ce", "pas"],
        default: "cc",
        requerired: true

        },
        id_number: {
        type: Number,
        requerired: true,
        unique: true
        },
        sex: {
        type: ["f", "m"],
        requerired: true

        },
        nacionality: {
        type: ["col", "extranjero"],
        requerired: true,
        default: "col"

        },
        country: {
        type: String,
        default: "Colombia"
        },
        military_card: {
        tipo: ["primera", "segunda"],
        number: { type: Number },
        dm:{ type: String }
        },
        date_place_birth:{
        date:{
            day:{
                type: Number
            },
            month: {
                type: Number
             },
             year:{
                type: Number
             }
        },
        place:{
            country: {
                type: String,
            },
            depto:{
                type: String,
            },
            municipio:{
                type: String,
            }
        }
        
        }
    },/*
    academic_training: {
        basic_half_education: {
            title: {type: String},
            grade: {type: Number},
            dategrade: {
                month: {type: Number},
                year: {type: Number}
            }

        }


*/
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("cuvis", CuviScheme)