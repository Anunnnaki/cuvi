const testCtrl = {}

const Test = require("../models/test")
const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleError")

/**
 * create curriculum vitae
 * @param {*} req 
 * @param {*} res 
 */
const createTest = async (req, res) => {
    try {
        const body = matchedData(req)
        const data = await Test.create(req.body)
console.log ( "body", req.body)
 /*
        const newCuvi = new Cuvi(body)
        const data = await newCuvi.save()
   */   
        res.send({ data});
      } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_CREATE_ITEMS_TEST");
      }
    
}

module.exports = {createTest}