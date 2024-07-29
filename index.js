const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

const port = process.env.PORT || 3004; 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

let comments = [
    { id: uuid(), username: 'Todd', comment: 'lol that is so funny!' },
    { id: uuid(), username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
    { id: uuid(), username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { id: uuid(), username: 'onlysayswoof', comment: 'woof woof woof' }
];

app.get('/', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    if (!username || !comment) {
        return res.render('comments/new', { error: 'Username and comment are required!' });
    }
    comments.push({ username, comment, id: uuid() });
    res.redirect('/');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    console.log(comment); // Log the comment to check if it's being found correctly
    if (comment) {
        res.render('comments/show', { comment });
    } else {
        res.redirect('/'); // or render a 404 page
    }
});


app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/');
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/');
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
});



app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});
