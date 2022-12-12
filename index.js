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


//Middleware
app.use("/api", cuviRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log('Server express is connected in ' + PORT + ' PORT')
})

dbConnect()
