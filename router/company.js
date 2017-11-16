const express = require('express');
const router = express.Router();
const model = require('../models');
const app = express();



router.get('/task1', (req, res) => {
  model.task.findAll({
    where: {
      id: 1
    }
  }).then((tasks) => {
    return res.json(tasks)
  })
});

router.get('/task2', (req, res) => {
  model.task.findAll({
    where: {
      id: 2
    }
  }).then((tasks) => {
    return res.json(tasks)
  })
});

router.get('/task3', (req, res) => {
  model.task.findAll({
    where: {
      id: 3
    }
  }).then((tasks) => {
    return res.json(tasks)
  })
});

router.get('/task4', (req, res) => {
  model.task.findAll({
    where: {
      id: 4
    }
  }).then((tasks) => {
    return res.json(tasks)
  })
});


router.post('/assign/:id', (req, res, next) => {
  const task = model.assign.build({
    employeeId: req.params.id,
    taskName: req.body.name
  }).save().then(() => {
    model.employee.findOne({
      where: {
        id: req.params.id
      }
    }).then((employee) => {
      employee.increment('totalTask')
      return console.log('Good Shit')
    })
  })
});


router.get('/employee', (req, res) => {
  model.employee.findAll().then((employee) => {
    console.log(employee)
    return res.json(employee)
  })
});

router.get('/assign/:id', (req, res) => {
  model.assign.findAll({
    where: {
      employeeId: req.params.id
    }
  }).then((employee) => {
    return res.json(employee)
  })
});




module.exports = router;
