const Answer = require("../models/answer")
const { matchedData } = require("express-validator")
const { handleHttpError } = require("../utils/handleError")

/**
 * create curriculum vitae
 * @param {*} req 
 * @param {*} res 
 */
const createAnswer = async (req, res) => {
  const x = res.redirect('https://script.google.com/macros/s/AKfycbw9j00QWBVmEXNLjq94VPsLUnbhVcsuWqx5aG5zDwtD9MOW7L7laOjIVLaBgUrgDQLkaw/exec?n0=1&n1=3&n2=3&n3=2&n4=1&n5=1&n6=1&n7=1&n8=2&n9=2&n10=3&n11=2&n12=3&n13=2&n14=3&n15=2&n16=3&n17=2&n18=1&n19=3&n20=3&n21=2&n22=1&n23=1&n24=1&n25=1&n26=2&n27=2&n28=3&n29=2&n30=3&n31=2&n32=3&n33=2&n34=3&n35=2')
  console.log ( "body", JSON.stringify(req.body.answers));
  console.log('https://script.google.com/macros/s/AKfycby4QluwY0ElE4tiuO8MfN5q066uP0GhuR4NSlVyewcm/dev?id='+ JSON.stringify(req.body.answers));
  console.log ("x: ", x.body);
  
  /*
    try {
        const body = matchedData(req)
        const data = await Answer.create(req.body)
console.log ( "body", req.body)
 /*
        const newCuvi = new Cuvi(body)
        const data = await newCuvi.save()
   //   /////////////////////////////////////////
        res.send({ data});
      } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_CREATE_ITEMS_ANSWER");
      }
      */
    
}

module.exports = {createAnswer}