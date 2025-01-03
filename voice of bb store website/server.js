const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files like CSS and JS

const PORT = 3000;

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using Gmail (or any mail service)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com', // Replace with your email
            pass: 'your-email-password' // Replace with your email password or app-specific password
        }
    });

    const mailOptions = {
        from: email,
        to: 'voiceofofficial@gmail.com', // Where the form will be sent
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: "Error sending email" });
        }
        res.status(200).json({ message: "Message sent successfully" });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
