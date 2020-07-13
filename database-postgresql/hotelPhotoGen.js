const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

var counter = 25000000;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('hotel_photos6.csv'));
  for (let i = 0; i < 5000000; i += 1) {
    writer.write({
      id: counter++,
      h_imageUrl: faker.image.imageUrl(),
      caption: faker.company.catchPhrase(),
      hotel_id: faker.random.number({ min: 0, max: 1499999 }),
    })
    console.log(i);
  }

  writer.end();
  console.log('generating complete');
}

dataGen();
