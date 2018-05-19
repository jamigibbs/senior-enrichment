const chalk = require('chalk');
const { db, Campuses, Students } = require('../models');
const seedData = require('./data.json');

db.sync({force: true})
  .then(() => {
    return Promise.all(seedData[0].map(campus => Campuses.create(campus)))
  })
  .then(() => {
    console.log(chalk.green('Campus seed successful!'));
  })
  .then(() => {
    return Promise.all(seedData[1].map(student => Students.create(student)))
  })
  .then(() => {
    console.log(chalk.green('Student seed successful!'));
    db.close()
  })
  .catch((err) => {
    console.log(chalk.red('There was an error: '));
    console.error(err.stack)
    db.close()
  })
