const express = require('express');
const path = require('path');
const app = express();

// ✅ Use dynamic port for Render
const PORT = process.env.PORT || 3000;

// In-memory storage
const applications = [];

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve form
app.get('/admission', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'Addmission-Form.html'));
});

// Optional: redirect root to admission form
app.get('/', (req, res) => {
  res.redirect('/admission');
});

// Handle form submission
app.post('/admission', (req, res) => {
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
