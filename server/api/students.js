const router = require('express').Router()
const Student = require('../db/models/student')

// api/students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) { next(err) }
})

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const student = await Student.findOne({
      where: {
        id
      }
    })
    res.json(student)
  } catch (err) { next(err) }
})

router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.json(student)
  } catch (err) { next(err) }
})

router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    const updated = await student.update(req.body);
    res.json(updated);
  } catch (err) { next(err) }
})

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  try {
    Student.destroy({
      where: {
        id
      }
    })
    res.status(204).end()
  } catch (err) { next(err) }
})

module.exports = router
