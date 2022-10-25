const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/data.json');

app.get('/', (req, res) => {
    res.send('Server is Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Server PORT 5000 Running')
});