const db = require('../../database/pg.js');
const axios = require('axios');
require('dotenv').config();

module.exports = {
  getOne: (data) => {
    const values = [data.id];
    return db.query('SELECT vehicles.*, vehicle_photos.* FROM vehicles JOIN vehicle_photos ON vehicles.id = vehicle_photos.vehicle_id WHERE vehicles.id = $1', values);
  },
  getAll: (data) => {
    const values = [data.id];
    //return db.query('SELECT * from vehicles where user_id = 1'); //HARDCODED
    return db.query('SELECT v.*, vp.url AS url FROM vehicles v JOIN vehicle_photos vp ON v.id = vp.vehicle_id');
  }
}