/* eslint-disable max-nested-callbacks */
var chai = require('chai')

var expect = chai.expect,
  should = chai.should,
  assert = chai.assert

require('dotenv').config()

var init = require('../../../../utils/init')

var id = 3

const config = {
  id,
  options: {
    tags: 'cooldown'
  },
  region: 'kr'
}

describe.skip('Static Summoner Spell', function () {
  this.timeout(0)

  describe('get static summoner spell', function () {
    describe('object param', function () {
      it('should throw on empty', function () {
        assert.throws(() => init().Static.spell(), Error)
      })

      describe('by id and options and region', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init()
              .Static.spell(config, function testCB(err, data) {
                expect(err).to.be.null
                expect(data).to.not.be.undefined
                done()
              })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .Static
              .spell(config)
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })

      describe('through callback', function () {
        it('should throw', function () {
          assert.throws(() =>
            init()
              .Static.spell(function testCB(err, data) {
                expect(err).to.be.null
                expect(data).to.not.be.undefined
                done()
              }), Error)
        })
      })
    })

    describe('standard params', function () {
      it('should throw on empty', function () {
        assert.throws(() => init().Static.SummonerSpell.by.id(), Error)
      })

      describe('by id', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init()
              .Static
              .SummonerSpell.by.id(id, function testCB(err, data) {
                expect(err).to.be.null
                expect(data).to.not.be.undefined
                done()
              })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .Static
              .SummonerSpell.by.id(id)
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })

      describe('by id and options and callback', function () {
        it('should be a successful call', function (done) {
          init()
            .Static
            .SummonerSpell.by.id(id, config.options, function testCB(err, data) {
              expect(data).to.not.be.undefined
              done()
            })
        })
      })

      describe('by id and region', function () {
        describe('through callback', function () {
          it('should be a successful call', function (done) {
            init()
              .Static
              .SummonerSpell.by.id(id, 'na', function testCB(err, data) {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })

        describe('through promise', function () {
          it('should be a successful call', function (done) {
            init()
              .Static
              .SummonerSpell.by.id(id, 'na')
              .then(data => {
                expect(data).to.not.be.undefined
                done()
              })
          })
        })
      })
    })
  })
})