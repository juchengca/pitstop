const db = require('../../database/pg.js');
const axios = require('axios');
require('dotenv').config();

module.exports = {
  //get one user HARDCODED TO ID = 1
  getOne: (data) => {
    const values = [data.id];
    return db.query('SELECT * from users where id = $1', values);
  }
}