const express = require("express")
const { userSignUp, userLogin } = require("../controller/userCtrl")
const router = express.Router()

router.post("/signup",userSignUp)
router.post("/login",userLogin)

module.exports = router