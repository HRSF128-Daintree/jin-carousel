const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

const counter = 0;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('userGen.csv'));
  for (let i = 0; i < 10000000; i +=1 ) {
    const fakeDate = randomDate(new Date(1910, 0, 1), new Date(2020, 0, 1))

    writer.write({
      id: counter++,
      email: faker.company.companyName(),
      username: faker.hacker.noun(),
      password: faker.random.number({ min: 0, max:100000000 }),
      date: fakeDate,
    })
  }
  writer.end();
  console.log('generating complete');
}

dataGen();