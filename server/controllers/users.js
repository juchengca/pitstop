const models = require('../models');

module.exports = {
  getOne: (req, res) => {
    console.log('controllers reached')
    models.users.getOne(req.query)
      .then((results) => {
        console.log('here are the results: ', results.rows);
        res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user');
        console.log('ERROR GET user', err);
      });
  }
};