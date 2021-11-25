const { assert } = require("chai")
const { default: isDisplayed } = require("webdriverio/build/commands/element/isDisplayed")

describe('Xornet browser Tests', () => {

it('should have xornet logo on landing page', (done) => {
browser.url('https://xornet.xoriant.com/')

//title of the launched webpage is printed in console as output
elemLogo = $('#header')
isDisplayedFlag = elemLogo.isDisplayed();
console.log(isDisplayedFlag);
assert.isTrue(isDisplayedFlag)

})
})