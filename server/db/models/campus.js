const Sequelize = require('sequelize')
const db = require('../index')

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/zKesgV4.png'
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Campus
