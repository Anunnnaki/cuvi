const mongoose = require ("mongoose")
require('dotenv').config()

const dbConnect = () => {
    mongoose.connect(process.env.URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,        
        }, 
        (err, res) => {
            if(!err){
                console.log('**** DB CONNECTED ****')
            }else{
                console.log('**** ERROR DB CONNECTION ****')
            }
    
        }
    )
}

module.exports = dbConnect