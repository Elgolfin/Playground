/* global describe, it, before, beforeEach, after, afterEach */
import {expect} from 'chai'
import axios from 'axios'
import sinon from 'sinon'
import sinonStubPromise from 'sinon-stub-promise'

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

  it('should return true', () => {
    axiosPost.resolves({})
    expect(true).to.be.equal(true)
  })
})
