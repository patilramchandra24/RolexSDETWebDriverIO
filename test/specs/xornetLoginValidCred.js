const { assert } = require("chai")


describe('Xornet browser Tests', () => {

it('Xornet login with valid cred', (done) => {
browser.url('https://xornet.xoriant.com/')
const UserName = $('#userNameInput')
const passwordInput = $('#passwordInput')
const signIn = $('#submitButton')
const errorLabel=$('#errorText')
//title of the launched webpage is printed in console as output
UserName.click()
UserName.setValue('XOR-IND\patil_ram')
passwordInput.click()
passwordInput.setValue('Test@123')
signIn.click()

isDisplayed = errorLabel.isDisplayed();
console.log(isDisplayed);
assert.isTrue(isDisplayed)

})
})