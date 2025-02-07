const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, I am Adarsh');
});

app.get('/home', (req, res) => {
    res.send('This is home page');
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});