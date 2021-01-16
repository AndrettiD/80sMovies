const express = require("express")
const app = express()

require("dotenv").config()
const PORT = process.env.PORT
const mongoose = require("mongoose")

//const bootstrap = require("bootstrap")

app.use(express.json())
const moviesController = require("./controllers/movie_controller.js")
app.use("/movies", moviesController)

app.use(express.static("public"))

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false
})

mongoose.connection.on("error", err =>
    console.log(err.message,
" is Mongod not running?/Problem with Atlas Connection?")
)

mongoose.connection.on("connected", () =>
console.log("mongo connected: ", MONGODB_URI)
)

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"))


// const PORT = 3000
// app.get("/", (req, res) => {
//     res.send ("hello world")
// } )

app.listen(PORT,() => {
    console.log(" listening on port ", PORT);
})
