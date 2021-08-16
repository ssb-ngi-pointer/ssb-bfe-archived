const tape = require('tape')
const { toTF } = require('../')

tape('toTF() happy cases', function (t) {
  t.equals(toTF('msg', 'bamboo').toString('hex'), '0103', 'bamboo msg')
  t.equals(toTF('generic', 'UTF8 string').toString('hex'), '0600', 'string')
  t.equals(toTF('generic', 'boolean').toString('hex'), '0601', 'boolean')
  t.equals(toTF('generic', 'nil').toString('hex'), '0602', 'nil')
  t.equals(toTF('generic', 'arbitrary bytes').toString('hex'), '0603', 'bytes')
  t.end()
})

tape('toTF() sad cases', function (t) {
  t.throws(() => {
    toTF('NONSENSE', 'bamboo')
  }, /Unknown type/i)
  t.throws(() => {
    toTF('msg', 'NONSENSE')
  }, /Unknown format/i)
  t.end()
})
