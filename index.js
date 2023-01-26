//googleapis
//const { google } = require("googleapis")

const express = require("express")
const cors = require ("cors")

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3001

/**
 * @ROUTES
 * 
 */
//Import Routes
const dbConnect = require("./config/mongo")
const cuviRoutes = require("./routes/cuvis")
const authRoutes = require("./routes/auth")
const testRoutes = require("./routes/tests")
const answerRoutes = require("./routes/answers")
const sheetRoutes = require("./routes/sheets")
/**
 * @MIDDLEWARE
 * 
 */
//Middleware
app.use("/api", cuviRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/test", testRoutes)
app.use("/api/answer", answerRoutes)
app.use('/api/sheets', sheetRoutes)

app.listen(PORT, () => {
    console.log( 'Server express is connected in ' + PORT + ' PORT')
})

/*
const id = '1-9M-NSJQmmnFeOf7mCl47KLsiTpngLf2k5oGoZjT8eg'

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

app.get('/api/googlesheet', async (req, res) => {
    try{
        const { sheets } = await authentication()

        //reading and storing the sheet

        const response   = await sheets.spreadsheets.values.get({
            spreadsheetId: id,
            range: 'Hoja1',
        })
        res.send(response.data)
    } catch(e) {
        console.log(e)
        res.status(500).send()
}
})
*/

dbConnect()


