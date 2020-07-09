DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;

USE carousel;

CREATE TABLE hotels(
	id SERIAL PRIMARY KEY,
	name VARCHAR (30) NOT NULL,
	address VARCHAR (40) NOT NULL,
	city VARCHAR (20) NOT NULL,
	state CHAR (2) NOT NULL,
	phone_number VARCHAR (15) NOT NULL,
	hotel_url TEXT,
	date DATE,
	hotel_rating NUMERIC (2, 1),
	num_reviews SMALLINT,
);

CREATE TABLE hotel_photos(
	id BIGSERIAL PRIMARY KEY,
	url TEXT,
	caption VARCHAR (25),
	hotel_id INTEGER REFERENCES hotels(id),
);

CREATE TABLE traveler_photos(
	id BIGSERIAL PRIMARY KEY,
	url TEXT NOT NULL,
	caption VARCHAR (25),
	traveler_rating SMALLINT,
	date DATE,
	hotel_id INTEGER REFERENCES hotels(id),
	user_id BIGINT REFERENCES users(id)
);

CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
	email TEXT,
	username VARCHAR (15),
	password VARCHAR (12),
	date DATE,
);