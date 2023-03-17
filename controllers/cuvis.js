const cuviCtrl = {}
const Cuvi = require("../models/cuvi")
const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleError")
const { isObjectIdOrHexString } = require("mongoose")

/**
 * get curriculum vitae
 * @param {*} req 
 * @param {*} res 
 */
const getCuvis = async (req, res) => {
    try{
      const user = req.res
      
        const cuvis = await Cuvi.find()
          res.json(cuvis)
          res.send({ data, user})
    }catch(e){
        //res.send({data})
        handleHttpError(res, 'Error_get_cuvis')
    }
    
}

/**
 * Get detail cuvi
 */

const getCuvi = async (req, res) => {
  try{
    //req = matchedData(req)
    //const {id} = req.params.id
    const id = req.params.id
    //console.log(id)
    const data = await Cuvi.findOne({
      id_user :  id
    })
    console.log (data)
    res.send({ data })
  }catch(e){
    handleHttpError(res, "ERROR_GET_CUVI")
  }
}



/**
 * create curriculum vitae
 * @param {*} req 
 * @param {*} res 
 */
const createCuvi = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await Cuvi.create(body)

 /*
        const newCuvi = new Cuvi(body)
        const data = await newCuvi.save()
   */   
        res.send({ data});
      } catch (e) {
        console.log(e)
        handleHttpError(e, "ERROR_CREATE_ITEMS");
      }
    
}

/**
 * Update cuvi
 * @param {*} req 
 * @param {*} res 
 */
 const updateCuvi = async (req, res) => {
    try {
      const body = matchedData(req)
      console.log("body", body)
      const bodyclean = req.body
      const data = await Cuvi.findByIdAndUpdate(req.params.id, req.body)
      console.log("data", data)
      
      } catch (e) {
        console.log(e)
        handleHttpError(e, "ERROR_UPDATE_ITEMS")
      }
    
}


const deleteCuvi = async (req, res) => {
  try{
    //req = matchedData(req)
    //const {id} = req.params.id
    const id = req.params.id
    console.log(id)
    const data = await Cuvi.findByIdAndDelete(id)
    res.send({ data })
  }catch(e){
    handleHttpError(res, "ERROR_DELETE_CUVI")
  }
}


module.exports = {getCuvi, getCuvis, createCuvi, updateCuvi, deleteCuvi}