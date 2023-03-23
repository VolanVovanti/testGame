const { it } = require('@jest/globals')
const assert = require('assert').strict
const { between } = require('./between')

it('should extract user email between <>', () => {
    // подготовка
    const line = 'Jhon Doe <jdoe@mail.com>'
    const expercted = ''
    // действие
    const email = between(line, '<>')
    // сравнение
    assert.equal(email, expercted)
})
