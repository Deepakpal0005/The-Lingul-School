const  express = require("express")
const app = express()
const bodyParser = require("body-parser")
// const connect = require("./connect")
const cors = require("cors")

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}))

// import routes
const userRoutes = require("./routes/userRoutes")
const mailRoutes = require("./routes/mailRoutes")

// connect()

app.use(express.json())

// use routes
app.use(userRoutes)
app.use(mailRoutes)

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(4000,() => {
    console.log(`App is running at port 4000`);
})