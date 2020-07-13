const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const writer = csvWriter();

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString().slice(0,10);
}

var counter = 0;
const dataGen = () => {
  writer.pipe(fs.createWriteStream('user1.csv'));
  for (let i = 0; i < 3000000; i +=1 ) {
    const fakeDate = randomDate(new Date(2000, 0, 1), new Date(2020, 0, 1))

    writer.write({
      user_id: counter++,
      email: counter + faker.internet.email(),
      username: faker.hacker.noun() + counter,
      password: faker.random.number({ min: 0, max:100000000 }),
      date: fakeDate,
    })
    console.log(i);
  }
  writer.end();
  console.log('generating complete');
}

dataGen();