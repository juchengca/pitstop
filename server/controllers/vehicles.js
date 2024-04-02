const models = require('../models');

module.exports = {
  getOne: (req, res) => {
    models.vehicles.getOne(req.query)
      .then((results) => {
        console.log(results.rows[0]);
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
  },
  getService: (req, res) => {
    models.vehicles.getService(req.query)
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET service');
        console.log('ERROR GET service', err);
      });
  },
  getRemindersAll: (req, res) => {
    models.vehicles.getRemindersAll(req.query)
      .then((results) => {
        res.status(200).send(results.rows);
      })
      .catch((err) => {
        res.status(500).send('ERROR GET reminders all');
        console.log('ERROR GET reminders all', err);
      });
  }
};