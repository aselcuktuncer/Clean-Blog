const express = require('express');
const mongoose = require('mongoose');

const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const Post = require('./models/Post');
const postController = require('./controllers/postControllers');
const pageController = require('./controllers/pageControllers');

const app = express();

//Connection to database
mongoose.connect('mongodb+srv://aselcuktuncer:zsZPmriLbdNbi3x@cleanblog.acbbx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("DB is connected")
}).catch((e)=> {
  console.log(e)
});

//Template Engine
app.set('view engine', 'ejs');

//Middlaware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Post Routes
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

//Page Routes
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;
//zsZPmriLbdNbi3x

app.listen(port, () => {
  console.log(`App is running on port number: ${port}`);
});
