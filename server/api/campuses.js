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

router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.json(campus)
  } catch (err) { next(err) }
})

module.exports = router
