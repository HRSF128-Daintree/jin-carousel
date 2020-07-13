DROP KEYSPACE IF EXISTS carousel;

CREATE KEYSPACE IF NOT EXISTS carousel WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'};

USE carousel;

CREATE TABLE hotels_by_state (
	hotel_id int,
	name text,
	address text,
	city text,
	state text,
	phone_number text,
	hotel_url text,
	date timestamp,
	hotel_rating int,
	num_reviews int,
	PRIMARY KEY (state, num_reviews)
);

CREATE TABLE photos_by_hotel (
	hotel_photo_id int,
	imageUrl text,
	caption text,
	hotel_id int,
	PRIMARY KEY (hotel_id, hotel_photo_id)
);


CREATE TABLE traveler_photos_by_hotel (
	traveler_photo_id int,
	imageUrl text,
	caption text,
	traveler_rating int,
	date timestamp,
	hotel_id int,
	user_id int,
	PRIMARY KEY (hotel_id, date)
);

CREATE TABLE users (
	user_id int,
	email text,
	username text,
	password text,
	date timestamp,
  PRIMARY KEY (user_id)
);

COPY hotels_by_state (hotel_id,name,address,city,state,phone_number,hotel_url,date,hotel_rating,num_reviews) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotels1.csv' WITH HEADER=true AND DELIMITER=',';

COPY users (user_id,email,username,password,date) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/user1.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos1.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos2.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos3.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos4.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos5.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos6.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos7.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos8.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos9.csv' WITH HEADER=true AND DELIMITER=',';

COPY photos_by_hotel (hotel_photo_id,imageUrl,caption,hotel_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/hotel_photos10.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos1.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos2.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos3.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos4.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos5.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos6.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos7.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos8.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos9.csv' WITH HEADER=true AND DELIMITER=',';

COPY traveler_photos_by_hotel (traveler_photo_id,imageUrl,caption,traveler_rating,date,hotel_id,user_id) FROM '/Users/sejin/hrsf128/SDC/photo-carousel/database-cassandra/traveler_photos10.csv' WITH HEADER=true AND DELIMITER=',';