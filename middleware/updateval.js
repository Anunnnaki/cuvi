/**
 * Verifica si el cuvi existe para actualizarlo, de lo contrario next para crearlo
 */
const Cuvi = require("../models/cuvi")
const { handleHttpError } = require("../utils/handleError")

/**
 * Validation req (update or create)
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


const updateval = async (req, res, next) => {

const data = await  Cuvi.find({id_user : req.user._id})


if(data){
    try {
         const data2 = await Cuvi.findByIdAndUpdate(data[0]._id.toString(), req.body)
          res.status(201);
          res.send({ data2});
        } catch (e) {
            console.log(e)
          handleHttpError(res, "ERROR_UPDATE_ITEMS");
        }
    
}

else{
    
    req.body.id_user = req.user._id
     next()
}
}

module.exports = updateval