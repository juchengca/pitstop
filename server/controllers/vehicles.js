const models = require('../models');

module.exports = {
  getOne: (req, res) => {
    models.vehicles.getOne(req.query)
      .then((results) => {
        res.status(200).send(results.rows[0]);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET vehicle');
        console.log('ERROR GET vehicle', err);
      });
  },
  getAll: (req, res) => {
    models.vehicles.getAll(req.query)
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET vehicles');
        console.log('ERROR GET vehicles', err);
      });
  }
};