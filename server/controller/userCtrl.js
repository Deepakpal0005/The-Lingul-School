const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
// const { options } = require("../routes/userRoutes")
require("dotenv").config()

exports.userSignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body

        if (!firstName || !email || !phoneNumber || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required !!!"
            })
        }

        // check for existing user
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists."
            })
        }

        // hash password
        const hashedPass = await bcrypt.hash(password, 10)

        // new user 
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPass,
            phoneNumber
        })

        const savedUser = await newUser.save()

        return res.status(200).json({
            success: true,
            message: "User account created."
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in adding new user : " + err.message
        })
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            })
        }
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User with this email doesn't exist."
            })
        }
        const payload = {
            email: user.email,
            id: user._id,
        }

        if (await bcrypt.compare(password, user.password)) {
            let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" })
            user.token = token
            user.password = undefined
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true
            }

            res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: "Login successful."
            })
        }
        else {
            return res.status(403).json({
                success: false,
                message: "Incorrect password."
            })
        }


    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Error in fetching user by ID : " + err.message
        })
    }
}