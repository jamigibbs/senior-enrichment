const router = require('express').Router();
const Campus = require('../db/models/campus');

router.get('/', async (req, res, next) => {
  const campuses = await Campus.findAll();
  res.json(campuses)
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  const campus = await Campus.findOne({
    where: {
      id
    }
  })
  res.json(campus)
})

module.exports = router
