'use strict'

const { db } = require('./server/db/models')
const app = require('./server')
const PORT = 1337

db.sync({force: true})
  .then(() => {
    console.log('db synced')
    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
  })
