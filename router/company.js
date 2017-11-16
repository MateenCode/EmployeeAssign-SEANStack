const express = require('express');
const router = express.Router();
const model = require('../models');
const app = express();


// Uncomment to Create Task


// model.task.create({
//     name: "Task 1"
// })

// model.task.create({
//     name: "Task 2"
// })

// model.task.create({
//     name: "Task 3"
// })

// model.task.create({
//     name: "Task 4"
// })




// Uncomment to Create Employee


// model.employee.create({
//     name: "Employee A",
//     totalTask:0
// })

// model.employee.create({
//     name: "Employee B",
//     totalTask:0
// })

// model.employee.create({
//     name: "Employee C",
//     totalTask:0
// })



//grabbing the tasks

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

//Posting individual assigns
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
      return console.log('Good Stuff')
    })
  })
});

//Getting employees
router.get('/employee', (req, res) => {
  model.employee.findAll().then((employee) => {
    console.log(employee)
    return res.json(employee)
  })
});

//Getting individual assigns
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
