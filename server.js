require('dotenv').config(); // dotenv'i dahil edin
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // CORS'u dahil edin

const app = express();
const PORT = process.env.PORT || 5000;

// CORS'u etkinleştirin
app.use(cors());

// JSON gövdesini işlemek için body-parser kullanın
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // E-posta gönderme ayarları
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Kullandığınız e-posta servisini buraya yazın
    auth: {
      user: process.env.EMAIL_USER, // Ortam değişkenlerinden e-posta adresini alın
      pass: process.env.EMAIL_PASS // Ortam değişkenlerinden şifreyi alın
    }
  });

  const mailOptions = {
    from: email,  // Kullanıcının e-posta adresi
    to: process.env.EMAIL_USER,  // Senin e-posta adresin
    subject: `Message from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`  // Kullanıcının adı ve e-posta adresi ile birlikte mesaj
};


  // E-posta gönderme işlemi
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully!');
  });
});

// Sunucuyu başlatın
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
