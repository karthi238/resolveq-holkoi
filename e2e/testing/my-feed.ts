import { browser, by, element } from 'protractor';
var jsonObject = require('../Objects.json');


export class MyFeedTest {

    questions: any = []

    checkMyFeed() {
        return element(by.css('.page-heading')).getText()
    }

    addQuestion() {
        return element(by.css('.textAreaStyle')).click().then(() => {
            element(by.css("textarea[placeholder='Ask the Question...']")).sendKeys(jsonObject.questions.askQuestion),
                element(by.buttonText('Post')).click()
        })
    }

    editQuestion() {
        return element(by.css('.edit')).click().then(() => {
            element(by.css("textarea[placeholder='Edit your Question...']")).clear()
            element(by.css("textarea[placeholder='Edit your Question...']")).sendKeys(jsonObject.questions.editQuestion);
            element(by.buttonText('Post')).click()
        })
    }

    likeQuestion() {
        return element(by.css('.fa-thumbs-up')).click().then(() => {
            console.log('like')
        })
    }

    dislikeQuestion() {
        return element(by.css('.fa-thumbs-down')).click().then(() => {
            console.log('dislike')
        })
    }

    followQuestion() {
        return element(by.css('.followButton')).click().then(() => {
            console.log('follow')
        })
    }

    addAnswer() {
        return element(by.buttonText('Answer')).click().then(() => {
            element(by.css("textarea[placeholder='Answer Question']")).sendKeys(jsonObject.answer);
        })
    }

    addComment() {
        return element(by.css('.questionMain')).click().then(() => {
            browser.sleep(1000)
            element(by.css('.addCommentForQuestion')).click()
            element(by.css("textarea[placeholder='Comment']")).sendKeys(jsonObject.addCommentForQuestion);
        })
    }

    addAnswerInDetailPage() {
        element(by.css("textarea[placeholder='Your Answer']")).sendKeys(jsonObject.answer).then(() => {
            browser.sleep(1000)
            element(by.buttonText('Post')).click()
            browser.sleep(1000)
        })
    }

    addCommentForAnswer() {
        element(by.css('.addCommentForAnswer')).click()
        browser.sleep(1000)
        element(by.css("textarea[placeholder='Add Comment']")).sendKeys(jsonObject.addCommentForAnswer)
    }

    editAnswer() {
        element(by.css('.edit')).click().then(() => {
            element(by.css("textarea[placeholder='Edit your Answer...']")).clear()
            element(by.css("textarea[placeholder='Edit your Answer...']")).sendKeys(jsonObject.editAnswer)
            browser.sleep(1000)
            element(by.buttonText('Post')).click()
        })
    }
}