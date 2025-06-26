const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// In-memory storage
const applications = [];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve form
app.get('https://addmission-form.onrender.com/admission', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'Addmission-Form.html'));
});

// Handle form submission
app.post('https://addmission-form.onrender.com/admission', (req, res) => {
  const { name, email, phone, course } = req.body;
  applications.push({ name, email, phone, course });

  res.send(`
    <h2>Thank you, ${name}!</h2>
    <p>You’ve successfully applied for the <strong>${course}</strong> program.</p>
    <a href="/admission">Back to form</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/admission`);
});
