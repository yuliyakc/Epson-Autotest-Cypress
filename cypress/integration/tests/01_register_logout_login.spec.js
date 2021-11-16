// import SignUpActions from "../../framework/page_actions/01_userSign/SignUpActions";
// import CommonActions from "../../framework/page_actions/CommonActions";
// import SignAsserts from "../../framework/page_actions/01_userSign/SignAsserts";
// import SignOutActions from "../../framework/page_actions/03_signOut/SignOutActions";
// import SignInActions from "../../framework/page_actions/01_userSign/SignInActions";
// import MyAccAsserts from "../../framework/page_actions/11_myAccount/MyAccAsserts";
//
// const signUpActions = new SignUpActions();
// const signOutActions = new SignOutActions();
// const signInActions = new SignInActions();
// const myAccAsserts = new MyAccAsserts();
// const commonActions = new CommonActions();
// const signAsserts  = new SignAsserts();
//
// describe ("Register, logout and relogin", ()=> {
//
//     it('should register new user, logout and relogin', function () {
//         commonActions.openWebsite();
//         cy.viewport(1200, 800);
//         commonActions.confirmAllCookies();
//         commonActions.clickCreateNewAccountBtn();
//         signUpActions.submitAndRegisterBtnClick();
//         check.commonAsserts.checkGlobalAlertIsDisplayed();
//
//         signUpActions.enterIncorrectDataForRegistration();
//         signUpActions.submitAndRegisterBtnClick();
//         signAsserts.checkIncorrectEmailError();
//         check.commonAsserts.checkGlobalAlertIsDisplayed();
//
//         signUpActions.enterRequiredDataForRegistration();
//         signUpActions.setCustomerTypePersonal();
//         signUpActions.setAgeRequirements();
//         signUpActions.setTermsOfUse();
//         signUpActions.submitAndRegisterBtnClick();
//         signOutActions.clickSignOutBtn();
//         signAsserts.checkUserLogsOut();
//
//         commonActions.clickCreateNewAccountBtn();
//         signInActions.enterEmailToLogin();
//         signInActions.enterPasswordToLogin();
//         signInActions.clickLogInBtn();
//         myAccAsserts.checkMyAccountBtnIsVisible();
//     });
// });