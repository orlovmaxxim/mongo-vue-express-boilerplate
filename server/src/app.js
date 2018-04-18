const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
var Post = require("../models/post");
const mongodb_conn_module = require('./mongodbConnModule');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

var db = mongodb_conn_module.connect();

app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description
  })
  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})

// fetch single post

app.get('/post/:id', (req, res) => {
  var db = req.db;
  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) { console.error(error); }
    res.send(post)
  })
})

// update post

app.put('/posts/:id', (req, res) => {
  var db = req.db;

  Post.findById(req.params.id, 'title description', function (error, post) {
    if (error) {
      console.error(error);
    }
    post.title = req.body.title
    post.description = req.body.description
    post.save(function (error) {
      if (error) {
				console.log(error)
			}
			res.send({
        success: true,
        message: 'Post edit successfully!'
      })
    })
  })
})

// delete post

app.delete('/posts/:id', (req, res) => {
  var db = req.db;
  Post.remove({
    _id: req.params.id
  }, function(err, post) {
    if (err) {
      res.send(err)
    }
    res.send({
      success: true,
      message: 'Post delete successfully!'
    })
  })
})

app.listen(process.env.PORT || 8081);