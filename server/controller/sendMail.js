const nodemailer = require('nodemailer')
require('dotenv').config()

exports.sendMail2 = async(req,res) => {
    try
    {
        const formData = req.body.formData

        // validate formData
        if(formData.name.trim()=="")
        {
            return res.status(400).json({
                success:false,
                message:"Name is required!"
            })
        }
        if(formData.email.trim()=="")
        {
            return res.status(400).json({
                success:false,
                message:"Email is required!"
            })
        }
        if(formData.number.trim()=="")
        {
            return res.status(400).json({
                success:false,
                message:"Phone Number is required!"
            })
        }

        // Create a transporter object using Gmail service
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,  // Your Gmail address
                pass: process.env.MAIL_PASSWORD,   // Your Gmail password or App Password
            },
        });

        // Setup email data
        let mailOptions = {
            from: `BestCoder ${process.env.MAIL_USER}`,      // Sender's email
            to:formData.email,                 // Receiver's email from request body
            subject:"Hello from BestCoder !",  // Subject from request body
            text:"We got your message, out team will contact you soon!!!"              // Plain text body
                                               // HTML body
        };

        let mailOptions2 = {
            from: `BestCoder ${process.env.MAIL_USER}`,
            to: process.env.PERSONAL_MAIL,
            subject:`New contact established, ${formData.subject}`,
            text:`Hi, ${formData.name} has contacted to you through the bestcoder online form. Phone number : ${formData.number} , email : ${formData.email} , message from the client : ${formData.message}`
        }
        // Send the email
        let info = await transporter.sendMail(mailOptions);
        let info2 = await transporter.sendMail(mailOptions2);
        // console.log("Mail sent");
    
        res.status(200).json({
            success: true,
            message: 'Email sent successfully',
            // messageId: info.messageId,
        });

    }
    catch(e)
    {
        // console.log(e.message);
        return res.status(500).json({
            success:false,
            message:"Error in sending mail : "+e.message
        })
    }
}

exports.test = async(req,res) => {
    try
    {
        const formData = req.body.formData
        console.log("formData : ",formData.name);
        return res.status(200).json({
            success:true,
            data:formData,
            message:"Test ctrl on"
        })
    }
    catch(e)
    {
        console.log(e.message);
        return res.status(500).json({
            success:false,
            message:"Error in test mail : "+e.message
        })
    }
}