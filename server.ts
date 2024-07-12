// server.ts

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 5173; // Port for the server to listen on

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "lukajanelidze5@gmail.com", // Replace with your email
    pass: "" // Replace with your email password or app password
  }
});

// Verify email connection
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// Routes
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: `${firstName} ${lastName}`,
    to: "your_email@gmail.com", // Replace with your email
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error('Error sending message:', error);
      res.status(500).json({ code: 500, status: "Failed to send message. Please try again later." });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
