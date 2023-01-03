//googleapis
const { google } = require("googleapis")
const { handleHttpError } = require("../utils/handleError")

const id = '1-9M-NSJQmmnFeOf7mCl47KLsiTpngLf2k5oGoZjT8eg'

/**
 * read datasheet
 * @param {*} req 
 * @param {*} res 
 */
const readSpreadsheet = async (req, res) => {
    console.log(req.body)
    try {
        const { sheets } = await authentication()

        //reading and storing the sheet

        const response   = await sheets.spreadsheets.values.get({
            spreadsheetId: id,
            range: 'Hoja1',
        })
        res.send(response.data)
     } catch (e) {
        console.log(e)
        //res.status(500).send()
        handleHttpError(res, "ERROR_READS_GOOGLE_DATA_SHEET");
      }
    
}

/**
 * 
 * @WRITE_DATASHEET
 */
const writeSpreadsheet = async (req, res) => {

try{
    const { n1, n2, n3 } = req.body
    const { sheets } = await authentication()
    // writting data to a spreadsheet
    const writeReq = await sheets.spreadsheets.values.append({
        spreadsheetId: id,
        range: 'Hoja1',
        valueInputOption: 'USER_ENTERED',
        resource:{
           values: [
            [n1,n2,n3],
           ] 
        }
    })
    console.log(writeReq)
    if(writeReq.status === 200){
        return res.json({ msg:'Spreadsheet update successfully!'})
    }
    return res.json({msg: "Spreadsheet update successfuly!"})
    
} catch(e){
    console.log(e)
        //res.status(500).send()
        handleHttpError(res, "ERROR_WRITE_GOOGLE_DATA_SHEET");
     

}

}

const authentication = async () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: 'https://www.googleapis.com/auth/spreadsheets'
     
    })
const client = await auth.getClient()
const sheets = google.sheets({
    version: 'v4',
    auth: client
})
return { sheets }
}


module.exports = {readSpreadsheet, writeSpreadsheet }







