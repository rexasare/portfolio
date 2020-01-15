const express = require('express')

var pagesContoller = {}

pagesContoller.homePage = (req, res) => {
  res.render('pages/home')
}

pagesContoller.aboutPage = (req, res) => {
  res.send('This is the about page.')
}

pagesContoller.pug = (req, res) => {
  res.render('test', {
    title: "Title of test",
    description: "This is the body",
    age: "Age of person"
  })
}


module.exports = pagesContoller
