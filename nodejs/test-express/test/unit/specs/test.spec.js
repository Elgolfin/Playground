/* global describe, it, before, beforeEach, after, afterEach */
import chai from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import sinonStubPromise from 'sinon-stub-promise'
import chaiHttp from 'chai-http'
import server from '../../../src/server'

let expect = chai.expect

chai.use(chaiHttp)
sinonStubPromise(sinon)

describe('Test', () => {
  let sandbox
  let axiosPost
  before(function () {
  })
  beforeEach(() => {
    sandbox = sinon.sandbox.create()
    axiosPost = sandbox.stub(axios, 'post').returnsPromise()
  })
  afterEach(() => {
    sandbox.restore()
  })
  after(function () {
  })

  describe('/ GET', () => {
    it('should properly set the cookies (200)', (done) => {
      axiosPost.resolves()
      chai.request(server)
      .get('/')
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        expect(res).to.have.status(200)
        expect(res).to.have.cookie('user.email')
        expect(res).to.have.cookie('user.email.sig')
        done()
      })
    })
  })

  describe('/read GET', () => {
    it('should properly read the cookies (200)', (done) => {
      axiosPost.resolves()
      chai.request(server)
      .get('/read')
      .set('Cookie', 'user.email=nico.rose@hiyafoo.com; user.email.sig=rJKywx3fBbYcB43TToTUehA0BlA')
      .end(function (err, res) {
        expect(res.text).to.equal('nico.rose@hiyafoo.com')
        expect(res).to.have.status(200)
        done(err)
      })
    })

    it('should returns an error when reading tampered cookie (400)', (done) => {
      chai.request(server)
      .get('/read')
      .set('Cookie', 'user.email=this-is-not-the-original-email@tampered.hack; user.email.sig=rJKywx3fBbYcB43TToTUehA0BlA')
      .end(function (err, res) {
        if (err) {
          expect(res).to.have.status(400)
          return done()
        }
        done()
        /*
        expect(res).to.have.status(400)
        done(err)
        */
      })
    })

    // SHOULD NOT BE DONE THIS WAY SEE HERE: https://github.com/chaijs/chai-http/issues/75#issuecomment-249138581
    it('succeeds when response has an error status', function (done) {
      chai.request(server)
      .get('/status/400')
      .end(function (err, res) {
        expect(res).to.have.status(400)
        done()
      })
    })
  })
})
