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

  describe('/ GET', (done) => {
    it('should properly set the cookies (200)', (done) => {
      axiosPost.resolves()
      chai.request(server)
      .get('/')
      .end((err, res) => {
        if (err) {}
        expect(res).to.have.status(200)
        expect(res).to.have.cookie('user.email')
        expect(res).to.have.cookie('user.email.sig')
        expect(res).to.have.cookie('token')
        expect(res).to.have.cookie('token.sig')
        done()
      })
    })
  })
})
