const Sequelize = require('sequelize')
const db = require('../index')

const Student = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/nJXHGxP.png'
  }
}, {
  getterMethods: {
    fullName() {
      return this.firstName + ' ' + this.lastName
    }
  },
  setterMethods: {
    fullName(value) {
      const names = value.split(' ');

      this.setDataValue('firstName', names.slice(0, -1).join(' '));
      this.setDataValue('lastName', names.slice(-1).join(' '));
    },
  }
})

module.exports = Student
