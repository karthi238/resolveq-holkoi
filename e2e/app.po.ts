import { browser, by, element } from 'protractor';

export class PlaygroundPage {

  private credentias = {
    username: 'karthi@gmail.com',
    password: 'karthi23'
  };

  navigateTo() {
    return browser.get('/');
  }

  fillCredentials(credentias: any = this.credentias) {
    element(by.css('.username')).sendKeys(credentias.username);
    element(by.css('.password')).sendKeys(credentias.password);
    browser.pause();
    element(by.css('.btn-primary')).click();
  }

  navigateToFeed() {
    return browser.get('/feed');
  }
}
