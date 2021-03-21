import { browser, by, element } from 'protractor';
import { SignUpTest } from './testing/sign-up';
import { MyFeedTest } from './testing/my-feed'
import { LoginTest } from './testing/login'
import { LeaderBoardTest } from './testing/leaderBoard'
import { QuestionTest } from './testing/q&a'
import { BlogTest } from './testing/blog'
import { WebinarTest } from './testing/webinar'
import { QuestionService } from 'app/service/question.service';


describe('sp-portal-web App', () => {

  let signUp: SignUpTest;
  let myFeed: MyFeedTest
  let login: LoginTest
  let leader: LeaderBoardTest;
  let qanda: QuestionTest
  let blog: BlogTest
  let webinar: WebinarTest
  let qaService: QuestionService


  beforeEach(() => {
    signUp = new SignUpTest();
    myFeed = new MyFeedTest();
    login = new LoginTest();
    leader = new LeaderBoardTest(qaService);
    qanda = new QuestionTest();
    blog = new BlogTest();
    webinar = new WebinarTest();
  });

  // Sign up Testing Starts
  // it('Account Creation', () => {
  //   signUp.navigateToSignUp();
  //   signUp.fillUserCredentials();
  //   signUp.createAccount();
  // })

  // it('additional details', () => {
  //   signUp.fillAdditionalDetails();
  //   expect(signUp.getRealName()).toEqual('Karthick Anbu')
  // })
  // Sign up Testing ends



  // Login Testing Starts
  it('login testing', () => {
    login.navigateToSignIn();
    login.fillSignInCredentials();
    login.signIn();
    expect(signUp.getRealName()).toEqual('Nischal Muthanna')
  })

  // Login Testing Ends



  // My Feed Page Testing Starts
  it('checks my Feed Page, add question, edit question', () => {
    expect(myFeed.checkMyFeed()).toEqual('My Feed');
    // myFeed.addQuestion();
    // myFeed.editQuestion();
  })

  it('checks like, dislike, follow', () => {
    // myFeed.likeQuestion();
    // myFeed.dislikeQuestion();
    // myFeed.followQuestion();
  })


  it('checks add answer and comment', () => {
    // myFeed.addAnswer();
    // myFeed.addComment();
  })

  it('checks add answer and comment in detail page', () => {
    // myFeed.addAnswerInDetailPage();
    // myFeed.addCommentForAnswer();
  })

  it('edit answer', () => {
    // myFeed.editAnswer();
  })

  // My Feed Page Testing Ends

  // Leaderboard Test Starts

  it('check leaderboard page and ask question', () => {
    leader.navigateToLeaderBoard()
    expect(leader.checkLeaderBoard()).toEqual('Leaderboard');
    expect(leader.askQuestionInLeaderBoard()).toEqual('true');
  })

  // Leaderboard Test Ends


  // Question Test Starts

  it('check question page', () => {
    qanda.navigateToQuestions()
    expect(qanda.checkQuestionPage()).toEqual('Q & A')
  })

  it('check add question and edit question', () => {
    // qanda.addQuestion()
    // qanda.editQuestion()
  })

  it('check like, dislike, follow', () => {
    // qanda.likeQuestion();
    // qanda.dislikeQuestion();
    // qanda.followQuestion();
  })

  it('add answer', () => {
    // qanda.addAnswer();
  })

  // Question Test Ends


  // Webinar Test Starts

  it('navigate to webinars page and check webinar page', () => {
    webinar.navigateToWebinar()
    expect(webinar.checkWebinar()).toEqual('Webinars');
  })

  it('edit webinar', () => {
    webinar.editWebinar()
    browser.sleep(3000)
  })

  it('go to speaker public profile and check', () => {
    expect(webinar.goToSpeakerPublicProfile()).toEqual('Nischal Muthanna')
  })

  it('go to display webinar page', () => {
    expect(webinar.displayWebinarPage()).toEqual('Equipment Validation, Tracking, Calibration and Preventive Maintenance')
  })

  // Webinar Test Ends

  // Blog Test Starts

  it('navigate to blogs page check blog page', () => {
    blog.navigateToBlog()
    expect(blog.checkBlog()).toEqual('Blogs');
  })

  it('checks create blog', () => {
    // blog.addBlog()
  })
  // Blog Test Ends



  // it('go to Control Panel page on clicking Control Panel in the header', () => {
  //   element(by.buttonText('Control Panel')).click().then(() => {
  //     element(by.css('.page-heading')).getText().then(resp => {
  //       expect(resp).toEqual('Control Panel')
  //     })
  //   })
  // })

  // it('go to Shopping Cart page on clicking Cart Icon in the header', () => {
  //   element(by.css('.icon')).click().then(() => {
  //     element(by.css('.carthd')).getText().then(resp => {
  //       expect(resp).toEqual('Shopping Cart')
  //       browser.sleep(2000)
  //     })
  //   })
  // })

  // it('Opens list on clicking profile image and selects my profile and check whether it is profile page', () => {
  //   element(by.css('.headerProfile')).click().then(() => {
  //     element(by.buttonText('My Profile')).click().then(() => {
  //       element(by.css('.page-heading')).getText().then(resp => {
  //         expect(resp).toEqual('My Profile')
  //         browser.sleep(2000)
  //       })
  //     })
  //   })
  // })

});
