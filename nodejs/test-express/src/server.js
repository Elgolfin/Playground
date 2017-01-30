var express = require('express')
var app = express()
var Cookies = require('cookies')

var keys = ['Nico', 'Elgo']

app.get('/', function (req, res) {
  var cookies = new Cookies(req, res, {'keys': keys})
  cookies
  .set('user.email', 'nico@elgolfin.net', {
    httpOnly: false,
    signed: true
  })
  return res.status(200).send('Cookie has been set')
})

app.get('/status/400', function (req, res) {
  res.sendStatus(400)
})

app.get('/read', function (req, res) {
  var cookies = new Cookies(req, res, {'keys': keys})
  var email = cookies.get('user.email', {signed: true})
  if (email === undefined) {
    return res.status(400).end()
  }
  return res.status(200).send(email)
})

app.listen(3000, function () {
  console.log('Server listening on port 3000')
})

module.exports = app
