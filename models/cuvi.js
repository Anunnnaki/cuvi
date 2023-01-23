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
            type: String,
            default: "cc",
            requerired: true

        },
        id_number: {
            type: Number,
            requerired: true,
            unique: true
        },
        sex: {
            type: String,
            requerired: true

        },
        nacionality: {
            type: String,
            requerired: true,
            default: "col"
        },
        country: {
            type: String,
            default: "Colombia"
        },
        military_card: {
            type: {type: String},
            number: { type: Number },
            dm:{ type: String }
        },
        date_place_birth:{
            date:{ type: String },
            place:{
                country: {
                type: String
            },
                depto:{
                type: String
            },
                municipio:{
                type: String
            }
        }
    },
    post_address:{
        address:{ type: String },
        country: { type: String },
        depto:{type: String},
        municipio:{ type: String },
        phone: {type: String}, 
        email: {type: String}
        }
            
            
    },
        academic_training: {
            basic_half_education: {
            title: {type: String},
            grade: {type: Number},
            dategrade: {type: String}

        },
        high_education:[{
            academic_modality:{type: String},
            aprobed_semestres:{type: Number},
            graduate:{type: String},
            title:{type: String},
            date_end:{type: String},
            id_profesional_target:{type: Number}
        }],
        lenguage:[{
            idiom: {type: String},
            to_speak: {type: String},
            to_read: {type: String},
            to_whrite: {type: String}
        }]

    },
    
    work_experience: [{
        facility_name: {type: String},
        public_or_private: {type: String},
        country: {type: String},
        department: {type: String},
        municipio: {type: String},
        email_facility: {type: String},
        phone_facility: {type: String},
        date_in:{type: String},
        date_out:{type: String},
        job_name:{type: String},
        dependency:{type: String},
        address_facility:{type: String}
    }]
},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("cuvis", CuviScheme)