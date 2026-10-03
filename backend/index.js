const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());

app.use(express.json());


// Mock user data
const user = {
  email: "induja@example.com",
  password: "Induja@123",
};


// Login API
app.post("/login", (req, res) => {

  const { email, password } = req.body;

  console.log("Login request received");
  console.log("Email:", email);

  // Check credentials
  if (
    email === user.email &&
    password === user.password
  ) {

    return res.status(200).json({
      message: "Login successful",
    });

  }

  // Invalid credentials
  return res.status(401).json({
    message: "Invalid email or password",
  });

});


// Test route
app.get("/", (req, res) => {
  res.send("NexaFlow backend is running!");
});


// Start server
app.listen(PORT, () => {

  console.log(
    `Server running on http://localhost:${PORT}`
  );

})