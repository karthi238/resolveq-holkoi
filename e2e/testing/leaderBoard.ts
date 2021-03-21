import { browser, by, element } from 'protractor';
import { QuestionService } from '../../src/app/service/question.service'
var jsonObject = require('../Objects.json');


export class LeaderBoardTest {

    questions: any = []

    constructor(private questionService: QuestionService) {

    }

    ngOnInit() {
        this.getQuestions();
    }

    getQuestions() {
        this.questionService.getQuestions().subscribe(resp => {
            this.questions = resp
            return this.questions
        })
    }

    navigateToLeaderBoard() {
        return element(by.buttonText('Leaderboard')).click()
    }

    checkLeaderBoard() {
        return element(by.css('.page-heading')).getText()
    }

    askQuestionInLeaderBoard() {
        element(by.css('.askQuestion')).click().then(() => {
            element(by.css("textarea[placeholder='Ask the Question...']")).sendKeys(jsonObject.questions.askQuestionForUser);
        })
    }
}