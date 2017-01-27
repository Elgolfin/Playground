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
  .set('token', 'gfhdgfhdfghgfdhjdfgjd', {
    httpOnly: false,
    signed: true
  })
  return res.status(200).end('Cookie has been set')
})

app.get('/read', function (req, res) {
  var cookies = new Cookies(req, res, {'keys': keys})
  var email = cookies.get('user.email', {signed: true})
  var token = cookies.get('token', {signed: true})
  return res.end('Hello ' + email + '\nYour token is: ' + token)
})

app.listen(3000, function () {
  console.log('Server listening on port 3000')
})

module.exports = app
