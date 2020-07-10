const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

const counter = 0;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('hotel_photos.csv'));
  for (let i = 0; i < 10000000; i +=1 ) {
    writer.write({
      id: counter++,
      caption: faker.company.catchPhrase(),
      hotel_id: faker.random.number({ min: 0, max: 300000 }),
    })
  }

  writer.end();
  console.log('generating complete');
}

dataGen();