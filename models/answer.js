const mongoose = require("mongoose")

const AnswerScheme = new mongoose.Schema(
    {
        id_user : {
             type: String,
             requerided: true
             },
        answers: [{
            answer: {type: String}

             }], 
        comments : [{
                user_id : {type: String},
                text : {type: String}
             }]


            },

            {
                versionKey: false,
                timestamps: true,
            }
        )
        
        module.exports = mongoose.model("answer", AnswerScheme)