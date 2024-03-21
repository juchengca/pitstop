const models = require('../models');

module.exports = {
  getOne: (req, res) => {
    models.users.getOne(req.query)
      .then((results) => {
        res.status(200).send(results.rows[0]);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET user');
        console.log('ERROR GET user', err);
      });
  }
};