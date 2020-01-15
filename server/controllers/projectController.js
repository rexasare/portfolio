const express = require('express')

const projectsController = {}

projectsController.index = (req, res) => {
  res.send('This is the projects Controller')
}


module.exports = projectsController
