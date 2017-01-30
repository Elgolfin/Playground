/* global describe, it */
import chai from 'chai'
import dummy from '../../../src/dummy'

let expect = chai.expect

describe('Dummy', () => {
  describe('Func', () => {
    it('should return the boolean passed as an argument', () => {
      expect(dummy.func(true)).to.be.true
      expect(dummy.func(false)).to.be.false
    })
  })
})
