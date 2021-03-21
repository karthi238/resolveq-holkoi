import { browser, by, element } from 'protractor';
var jsonObject = require('../Objects.json');


export class BlogTest {

    navigateToBlog() {
        return element(by.buttonText('Blogs')).click()
    }

    checkBlog() {
        return element(by.css('.page-heading')).getText()
    }

    addBlog() {
        element(by.css('.blogText')).click()
        element(by.css("input[placeholder='Title']")).sendKeys(jsonObject.blogs.title)
        element(by.css("input[placeholder='Subtitle']")).sendKeys(jsonObject.blogs.subtitle)
        element(by.css("input[placeholder='Image URL']")).sendKeys(jsonObject.blogs.image)
        browser.sleep(2000)
        browser.executeScript('window.scrollTo(0,600);')
        browser.sleep(2000)
        // element(by.tagName('angular-editor')).sendKeys(jsonObject.blogs.content)
    }
}