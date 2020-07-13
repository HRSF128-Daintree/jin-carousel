const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

var counter = 0;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('hotels1.csv'));
  for (let i = 0; i < 1500000; i +=1 ) {
    const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1))

    writer.write({
      id: counter++,
      name: faker.company.companyName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      phone_number: faker.phone.phoneNumberFormat(2),
      hotel_url: faker.image.imageUrl(),
      date: fakeDate,
      hotel_rating: faker.random.number({ min: 0, max: 5 }),
      num_reviews: faker.random.number({ min: 0, max: 30000 }),
    })
    console.log(i)
  }

  writer.end();
  console.log('generating complete');
}

dataGen();