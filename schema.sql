DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(
  ID INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(100),
  price DECIMAL(10,4),
  rating INT NULL,
  PRIMARY KEY 
);

INSERT INTO burgers (type, price)

