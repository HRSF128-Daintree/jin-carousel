const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

var counter = 25000000;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('hotel_photos6.csv'));
  for (let i = 0; i < 5000000; i += 1) {
    writer.write({
      hotel_photo_id: counter++,
      imageUrl: faker.image.imageUrl(),
      caption: faker.company.catchPhrase(),
      hotel_id: faker.random.number({ min: 0, max: 1499999 }),
    })
    console.log(i);
  }

  writer.end();
  console.log('generating complete');
}

dataGen();