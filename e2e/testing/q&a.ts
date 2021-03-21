import { browser, by, element } from 'protractor';
var jsonObject = require('../Objects.json');


export class QuestionTest {

    questions: any = []
    checkQuestion: string = 'true'

    navigateToQuestions() {
        return element(by.buttonText('Q&A')).click()
    }

    checkQuestionPage() {
        return element(by.css('.page-heading')).getText()
    }

    addQuestion() {
        element(by.css('.textAreaStyle')).click().then(() => {
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
}