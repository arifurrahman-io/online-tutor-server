const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/data.json');
const courseCategory = require('./data/courseCategory.json');
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

app.get('/categories', (req, res) => {
    res.send(courseCategory);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '4') {
        res.send(courses);
    } else {
        const categoryCourse = courses.filter(c => c.category_id === id);
        res.send(categoryCourse);
    }
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find((course) => course.id == id);
    if (!getSingleCourse) {
        res.send('Data not found!');
    }
    res.send(getSingleCourse);
});


app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const getSingleCourse = courses?.find((course) => course.id == id);
    if (!getSingleCourse) {
        res.send('Data not found!');
    }
    res.send(getSingleCourse);
});



app.listen(port, () => {
    console.log('Server PORT 5000 Running')
});