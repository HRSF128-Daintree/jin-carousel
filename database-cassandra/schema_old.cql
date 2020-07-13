CREATE KEYSPACE IF NOT EXISTS carousel WITH REPLICATION = {'class': 'SimpleStrategy', 'replactaion_factor': '1'};

CREATE TABLE IF NOT EXISTS hotels (
	hotel_id uuid
	name text,
	address text,
	city text,
	state text,
	phone_number text,
	hotel_url text,
	date timestamp,
	hotel_rating int,
	num_reviews int,
	hotel_photos map<text, text>,
	PRIMARY KEY (hotel_id, num_reviews)
);

CREATE TABLE traveler_photos (
	traveler_photo_id uuid
	imageUrl text,
	caption text,
	username text
	traveler_rating int,
	date timestamp,
	hotel_id uuid,
	user_id uuid,
	PRIMARY KEY (traveler_photo_id, date)
);

CREATE TABLE IF NOT EXISTS users (
	user_id uuid,
	email text,
	username text,
	password text,
	date timestamp,
	PRIMARY KEY (user_id)
);
