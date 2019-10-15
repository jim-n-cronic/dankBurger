CREATE DATABASE dankBurgers_db;
USE dankBurgers_db;

CREATE TABLE burgers(
    id int(3) not null auto_increment,
    burgerName varchar(225) not null,
    slapped boolean default false,
    PRIMARY KEY (id)
);