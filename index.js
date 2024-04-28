// Import the Express module
const express = require('express');

// Create an Express application
const app = express();
app.use(cors())
app.use(express.json())

// Define a route for the homepage
app.get('/', (req, res) => {
 res.json({message:"Hello, from backend"})
});
app.get('/body', (req, res) => {
    const {body} = req.body;
    res.json({message:"Hello, from backend",body:body})
});


// Start the server
const port = process.env.PORT || 3000; // Use the PORT environment variable if available, otherwise use port 3000
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});