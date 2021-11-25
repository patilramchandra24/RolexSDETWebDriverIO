
const { assert } = require("chai")

describe('Xornet browser title check', () => {

it('should have the right title', (done) => {
browser.url('https://xornet.xoriant.com/')

//title of the launched webpage is printed in console as output

const pagetitle = browser.getTitle()
console.log('Title of the webpage is -' + pagetitle)
assert.equal("Sign In", pagetitle)
})
})
