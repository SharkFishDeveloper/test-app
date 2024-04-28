// Import the Express module
const express = require('express');
const cors = require('cors');
// Create an Express application
const app = express();
app.use(cors())
app.use(express.json())

// Define a route for the homepage
app.get('/', (req, res) => {
 return res.json({message:"Hello, from backend"})
});
app.post('/body', (req, res) => {
    const {body} = req.body;
   return  res.json({message:"Hello, from backend",body:body})
});

const port =  4000; 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;