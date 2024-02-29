const db = require('../../database/pg.js');
const axios = require('axios');
require('dotenv').config();

module.exports = {
  getOne: (data) => {
    const values = [data.id];
    return db.query("SELECT vehicles.*,array_agg(json_build_object( 'id', vehicle_photos.id, 'vehicle_id', vehicle_photos.vehicle_id, 'url', vehicle_photos.url, 'type', vehicle_photos.type )) AS vehicle_photos FROM vehicles JOIN vehicle_photos ON vehicles.id = vehicle_photos.vehicle_id WHERE vehicles.id = $1 GROUP BY vehicles.id;",values);
  },
  getAll: (data) => {
    const values = [data.id];
    //return db.query('SELECT * from vehicles where user_id = 1'); //HARDCODED
    return db.query('SELECT v.*, vp.url AS url FROM vehicles v JOIN vehicle_photos vp ON v.id = vp.vehicle_id');
  },
  getService: (data) => {
    const values = [data.id];
    return db.query('SELECT * FROM services WHERE vehicle_id = $1', values);
  },
}