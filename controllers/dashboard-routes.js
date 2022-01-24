const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'content',
        'created_at',
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  

router.get('/create', (req, res) => {
    res.render('create-post', { loggedIn: true });
  });

  router.get('/edit', (req, res) => {
    res.render('edit-post', { loggedIn: true });
  });
  



module.exports = router;