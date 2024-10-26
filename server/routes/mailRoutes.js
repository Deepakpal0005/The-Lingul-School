const express = require("express")
const { sendMail, sendMail2, test } = require("../controller/sendMail")
const router = express.Router()

// router.get('/mail',sendMail)
router.post('/sendMail',sendMail2)
router.post('/test',test)

module.exports = router