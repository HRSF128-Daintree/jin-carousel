const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

var counter = 25000000;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('traveler_photos6.csv'));
  for (let i = 0; i < 5000000; i +=1 ) {
    const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1))

    writer.write({
      traveler_photo_id: counter++,
      imageUrl: faker.image.imageUrl(),
      caption: faker.company.catchPhrase(),
      traveler_rating: faker.random.number({ min: 0, max: 5 }),
      date: fakeDate,
      hotel_id: faker.random.number({ min: 0, max: 1499999 }),
      user_id: faker.random.number({ min: 0, max: 2999999 }),
    })
    console.log(i);
  }

  writer.end();
  console.log('generating complete');
}

dataGen();