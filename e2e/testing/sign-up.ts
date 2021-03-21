import { browser, by, element } from 'protractor';

export class SignUpTest {

  credentials = {
    firstName: 'Karthick',
    lastName: 'Anbu',
    email: 'anbukarthi@gmail.com',
    passwordNew: 'michael',
    industry: 'software'
  };

  navigateToSignUp() {
    return browser.get('/signupwiz')
  }

  fillUserCredentials() {
    return (
      element(by.css("input[placeholder='First Name']")).sendKeys(this.credentials.firstName),
      element(by.css("input[placeholder='Last Name']")).sendKeys(this.credentials.lastName),
      element(by.css("input[placeholder='Email']")).sendKeys(this.credentials.email),
      element(by.css("input[placeholder='Password']")).sendKeys(this.credentials.passwordNew)
    )
  }

  createAccount() {
    return element(by.buttonText('Sign Up')).click()
  }

  fillAdditionalDetails() {
    return (
      element(by.css("input[placeholder='You can type multiple industries']")).sendKeys(this.credentials.industry),
      element(by.buttonText('Next')).click(),
      element(by.buttonText('SKIP')).click(),
      element(by.buttonText('SKIP')).click()
    )
  }

  getRealName() {
    return element(by.css('.userName')).getText();
  }

}