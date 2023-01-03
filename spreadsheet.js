const GoogleSpreadsheet = require ('google-spreadsheet') 
const { promisify } = require("util")


const creds = require('./cuvisheetkey.json')

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1-9M-NSJQmmnFeOf7mCl47KLsiTpngLf2k5oGoZjT8eg')
    await promisify(doc.useServiceAccountAuth)(creds)
    const info = await promisify(doc.getInfo)()

    const sheet = info.worksheets[0]
    console.log('Title: ${sheet.title}, Rows: ${sheet.rowCount}'+ sheet.title)



}
accessSpreadsheet()
module.exports = {accessSpreadsheet}