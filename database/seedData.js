const process = require('process');
const db = require('./index.js');
const Hotel = require('./schema.js');

const sampleHotel = [{
  hotel_id: 0,
  name: 'Havana Cabana',
  date: '1987-10-26',
  hotel_photos: [{ imageUrl: 'https://a0.muscache.com/im/pictures/a06dab47-b4bd-49a5-9c15-0f4d9caaf130.jpg?im_w=720', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/4564d7eb-4fd7-41af-aea8-65efa8313dd1.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/a85f1d2b-8baa-4137-8177-88b4c6408633.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/77411178-1f58-494d-beb0-20842735885f.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/772f89c4-d637-43f0-a338-9b3093f85a5b.jpg?im_w=1440', caption: '' }, { imageUrl: '', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', caption: '' }],
  travelers: [{ imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', username: 'user01', rating: 5 }],
  price: 100,
  reviews: 210,
  rating: 4.5,
  location: 'Orange County',
  type: 'Hotel',
  phoneNumber: 5042010302,
  views: 1002,
  },
  {
  name: 'Hilton',
  date: '2020-01-14',
  hotel_photos: [{ imageUrl: 'https://a0.muscache.com/im/pictures/a06dab47-b4bd-49a5-9c15-0f4d9caaf130.jpg?im_w=720', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/4564d7eb-4fd7-41af-aea8-65efa8313dd1.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/a85f1d2b-8baa-4137-8177-88b4c6408633.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/77411178-1f58-494d-beb0-20842735885f.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/772f89c4-d637-43f0-a338-9b3093f85a5b.jpg?im_w=1440', caption: '' }, { imageUrl: '', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', caption: '' }],
  travelers: [{ imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', username: 'user01', rating: 5 }],
  price: 150,
  reviews: 28192,
  rating: 4.8,
  location: 'San Francisco',
  type: 'hotel',
  phoneNumber: 4020391029,
  views: 19232,
  },
  {
  hotel_id: 2,
  name: 'Best Western',
  date: '2001-12-23',
  hotel_photos: [{
      imageUrl: 'https://a0.muscache.com/im/pictures/a06dab47-b4bd-49a5-9c15-0f4d9caaf130.jpg?im_w=720', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/4564d7eb-4fd7-41af-aea8-65efa8313dd1.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/a85f1d2b-8baa-4137-8177-88b4c6408633.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/77411178-1f58-494d-beb0-20842735885f.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/772f89c4-d637-43f0-a338-9b3093f85a5b.jpg?im_w=1440', caption: '' }, { imageUrl: '', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', caption: '' }],
  travelers: [{ imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', username: 'user01', rating: 5 }],
  price: 82,
  reviews: 395,
  rating: 4.3,
  location: 'Nashville',
  type: 'Hotel',
  phoneNumber: 7020192939,
  views: 10022,
  },
  {
  hotel_id: 3,
  name: 'Casa Marina',
  date: '1992-04-05',
  hotel_photos: [{ imageUrl: 'https://a0.muscache.com/im/pictures/a06dab47-b4bd-49a5-9c15-0f4d9caaf130.jpg?im_w=720', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/4564d7eb-4fd7-41af-aea8-65efa8313dd1.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/a85f1d2b-8baa-4137-8177-88b4c6408633.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/77411178-1f58-494d-beb0-20842735885f.jpg?im_w=1440', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/772f89c4-d637-43f0-a338-9b3093f85a5b.jpg?im_w=1440', caption: '' }, { imageUrl: '', caption: '' }, { imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', caption: '' }],
  travelers: [{ imageUrl: 'https://a0.muscache.com/im/pictures/6f98200a-c056-4d29-b376-746dca1f024c.jpg?im_w=1440', username: 'user01', rating: 5 }],
  price: 120,
  reviews: 2120,
  rating: 4.2,
  location: 'Los Angeles',
  type: 'Hotel',
  phoneNumber: 4920102931,
  views: 39291,
  },
]

  const insertSampleHotels = function () {
    Hotel.create(sampleHotel)
      .then(() => process.exit());
  };

  insertSampleHotels();