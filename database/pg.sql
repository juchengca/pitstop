DROP SCHEMA IF EXISTS pitstop CASCADE;

CREATE SCHEMA pitstop;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR,
  password VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR,
  location VARCHAR,
  bio VARCHAR
);

CREATE TABLE vehicles (
  id SERIAL PRIMARY KEY,
  user_id INT,
  make VARCHAR,
  model VARCHAR,
  year INT,
  trim VARCHAR,
  color VARCHAR,
  mileage INT,
  motor VARCHAR,
  type VARCHAR,
  reg_month INT,
  vin VARCHAR,
  purchase_date DATE,
  sold_date DATE,
  ownership VARCHAR,
  description VARCHAR,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  vehicle_id INT,
  service VARCHAR,
  mi_interval INT,
  yr_interval INT,
  miles_serviced INT,
  date_serviced DATE,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE CASCADE
);

CREATE TABLE user_photos (
  id SERIAL PRIMARY KEY,
  user_id INT,
  url VARCHAR,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE vehicle_photos (
  id SERIAL PRIMARY KEY,
  vehicle_id INT,
  url VARCHAR,
  type VARCHAR,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE CASCADE
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  vehicle_id INT,
  type VARCHAR,
  note VARCHAR,
  FOREIGN KEY (vehicle_id) REFERENCES vehicles(id) ON DELETE CASCADE
);

/*
COPY users FROM '/Users/jccode/JCproj/pitstop/data/pitstop_data-users.csv' DELIMITERS ',' CSV header;
COPY vehicles FROM '/Users/jccode/JCproj/pitstop/data/pitstop_data-vehicles.csv' DELIMITERS ',' CSV header;
COPY services FROM '/Users/jccode/JCproj/pitstop/data/pitstop_data-services.csv' DELIMITERS ',' CSV header;
COPY user_photos FROM '/Users/jccode/JCproj/pitstop/data/pitstop_data-user_photos.csv' DELIMITERS ',' CSV header;
COPY vehicle_photos FROM '/Users/jccode/JCproj/pitstop/data/pitstop_data-vehicle_photos.csv' DELIMITERS ',' CSV header;
COPY notes FROM '/Users/jccode/JCproj/pitstop/data/pitstop_data-notes.csv' DELIMITERS ',' CSV header;
*/

/*
  -- AFTER IMPORTING THE DATA- This sets the auto icrement to the last id
SELECT setval('pitstop.users_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pitstop.users));
SELECT setval('pitstop.vehicles_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pitstop.vehicles));
SELECT setval('pitstop.services_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pitstop.services));
SELECT setval('pitstop.userPhotos_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pitstop.userPhotos));
SELECT setval('pitstop.vehiclePhotos_id_seq', (SELECT COALESCE(MAX(id), 0) FROM pitstop.vehiclePhotos));
*/