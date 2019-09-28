const db = require('../models');

module.exports = function (app) {
  // Load index page
  app.get('/', (req, res) => {
    // If user has account send them one place otherwise redirect to login
    if (req.user) {
      res.redirect('/mainfeed');
    }
    res.redirect('/login');
  });

  // page for logging in
  app.get('/login', (req, res) => {
    res.render('login', {
      msg: 'Welcome!',
    });
  });

  app.get('/mainfeed', (req, res) => {
    res.render('mainfeed', {
      msg: 'Welcome!',
    });
  });

  // load a user page
  app.get('/user/:username', (req, res) => {
    res.render('user', {
      msg: 'Welcome!',
    });
  });

  // load the post review page
  app.get('/post', (req, res) => {
    res.render('post', {
      msg: 'Welcome!',
    });
  });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
