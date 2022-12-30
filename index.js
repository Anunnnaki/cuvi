const express = require("express")
const cors = require ("cors")

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

/**
 * ROUTES
 * 
 */
//Import Routes
const dbConnect = require("./config/mongo")
const cuviRoutes = require("./routes/cuvis")
const authRoutes = require("./routes/auth")
const testRoutes = require("./routes/tests")
const answerRoutes = require("./routes/answers")
//const googleRoutes = require("./routes/googlesheet")


//Middleware
app.use("/api", cuviRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/test", testRoutes)
app.use("/api/answer", answerRoutes)
//app.use("/api/googlesheet", googleRoutes)

app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})

dbConnect()

