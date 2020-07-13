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
	hotel_id INTEGER REFERENCES hotels(id)
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
	hotel_id INTEGER REFERENCES hotels(id),
	user_id BIGINT REFERENCES users(id)
);

COPY hotels FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotels1.csv' DELIMITER ',' CSV HEADER;

COPY users FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/user1.csv' DELIMITER ',' CSV HEADER;

COPY hotel_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotel_photos1.csv' DELIMITER ',' CSV HEADER;

COPY hotel_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotel_photos2.csv' DELIMITER ',' CSV HEADER;

COPY hotel_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotel_photos3.csv' DELIMITER ',' CSV HEADER;

COPY hotel_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotel_photos4.csv' DELIMITER ',' CSV HEADER;

COPY hotel_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotel_photos5.csv' DELIMITER ',' CSV HEADER;

COPY hotel_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/hotel_photos6.csv' DELIMITER ',' CSV HEADER;

COPY traveler_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/traveler_photos1.csv' DELIMITER ',' CSV HEADER;

COPY traveler_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/traveler_photos2.csv' DELIMITER ',' CSV HEADER;

COPY traveler_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/traveler_photos3.csv' DELIMITER ',' CSV HEADER;

COPY traveler_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/traveler_photos4.csv' DELIMITER ',' CSV HEADER;

COPY traveler_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/traveler_photos5.csv' DELIMITER ',' CSV HEADER;

COPY traveler_photos FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-postgresql/traveler_photos6.csv' DELIMITER ',' CSV HEADER;
