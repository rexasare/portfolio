const express = require('express')

const blogController = {}

blogController.index = (req, res) => {
  res.send('This is the blog page')
}

module.exports = blogController
