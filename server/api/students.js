const router = require('express').Router()
const Student = require('../db/models/student')

router.get('/', async (req, res, next) => {
  const students = await Student.findAll();
  res.json(students);
})

router.get('/:id', async (req, res, next) => {
  const id = req.params.id
  const student = await Student.findOne({
    where: {
      id
    }
  })
  res.json(student)
})

router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.json(student)
  } catch (err) { next(err) }
})

module.exports = router
