DROP DATABASE IF EXISTS carousel;
CREATE DATABASE carousel;

\c carousel;

CREATE TABLE hotels (
	id SERIAL PRIMARY KEY,
	name TEXT,
	address VARCHAR (40) NOT NULL,
	city VARCHAR (30) NOT NULL,
	state CHAR (2) NOT NULL,
	phone_number VARCHAR (15) NOT NULL,
	hotel_url TEXT,
	date DATE,
	hotel_rating NUMERIC (2, 1),
	num_reviews SMALLINT
);

CREATE TABLE hotel_photos (
	id BIGSERIAL PRIMARY KEY,
	h_imageUrl TEXT,
	caption TEXT,
	hotel_id INTEGER
);

CREATE TABLE users (
	id BIGSERIAL PRIMARY KEY,
	email TEXT,
	username TEXT,
	password VARCHAR (12),
	date DATE
);

CREATE TABLE traveler_photos (
	id BIGSERIAL PRIMARY KEY,
	t_imageUrl TEXT NOT NULL,
	caption TEXT,
	traveler_rating SMALLINT,
	date DATE,
	hotel_id INTEGER,
	user_id BIGINT
);
