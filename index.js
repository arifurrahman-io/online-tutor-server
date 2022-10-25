const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/data.json');
const blog = require('./data/blog.json');

app.get('/', (req, res) => {
    res.send('Server is Running');
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/blog', (req, res) => {
    res.send(blog);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find((course) => course.id == id);
    if (!getSingleCourse) {
        res.send('Data not found!');
    }
    res.send(getSingleCourse);
});
app.get('/category/:name', (req, res) => {
    const name = req.params.name;
    const getCategory = courses?.filter((c) => c.category == name);
    if (!getCategory) {
        res.send('Unavailable Category!');
    }
    res.send(getCategory);
});

app.listen(port, () => {
    console.log('Server PORT 5000 Running')
});