const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// Define routes
router.get('/', function (req, res) {
  res.render('index.html');
});

router.get('/user', controllers.users.getOne);
router.get('/vehicle', controllers.vehicles.getOne);
router.get('/vehicles', controllers.vehicles.getAll);
router.get('/service', controllers.vehicles.getService)

// Export router to be used in index.js
module.exports = router;