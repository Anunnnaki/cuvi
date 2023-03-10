const mongoose = require("mongoose")

const TestScheme = new mongoose.Schema(
    {
        name: {
             type: String,
             unique: true,
        requerided: true
             },
        questions: [{
            question: {type: String}

             }], 
        comments : [{
                text : {type: String}
             }]


            },

            {
                versionKey: false,
                timestamps: true,
            }
        )
        
        module.exports = mongoose.model("tests", TestScheme)