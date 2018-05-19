const router = require('express').Router();
const Campus = require('../db/models/campus');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses)
  } catch (err) { next(err) }

})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const campus = await Campus.findOne({
      where: {
        id
      }
    })
    res.json(campus)
  } catch (err) { next(err) }
})

router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body);
    res.json(campus)
  } catch (err) { next(err) }
})

router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findById(req.params.id);
    const updated = await campus.update(req.body);
    res.json(updated)
  } catch (err) { next(err) }
})

module.exports = router
