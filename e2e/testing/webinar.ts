import { browser, by, element } from 'protractor';
var jsonObject = require('../Objects.json');


export class WebinarTest {

    navigateToWebinar() {
        return element(by.buttonText('Webinars')).click()
    }

    checkWebinar() {
        return element(by.css('.page-heading')).getText()
    }

    editWebinar() {
        return element(by.css('.editWebinar')).click(),
            element(by.css("input[placeholder='Enter Duration in mins']")).clear(),
            element(by.css("input[placeholder='Enter Duration in mins']")).sendKeys(120),
            element(by.css("input[placeholder='Webinar Title']")).clear(),
            element(by.css("input[placeholder='Webinar Title']")).sendKeys('Equipment Validation, Tracking, Calibration and Preventive Maintenance'),
            element(by.buttonText("Save Changes")).click()
    }

    goToSpeakerPublicProfile() {
        element(by.css('.spkName')).click()
        return element(by.css('.profileName')).getText()
    }

    displayWebinarPage(){
        element(by.css('.webTitle')).click()
        return element(by.css('.webinarTitle')).getText()
    }
}