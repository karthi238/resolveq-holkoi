import { browser, by, element } from 'protractor';

export class LoginTest {

    credentials = {
        username: "nischal@gmail.com",
        password: "nischal"
    }

    navigateToSignIn() {
        browser.get('/');
    }

    fillSignInCredentials() {
        element(by.css("input[placeholder='Username']")).sendKeys(this.credentials.username);
        element(by.css("input[placeholder='Password']")).sendKeys(this.credentials.password);
    }

    signIn() {
        element(by.buttonText('Sign In')).click()
    }

    getRealName() {
        return element(by.css('.userName')).getText();
      }
}