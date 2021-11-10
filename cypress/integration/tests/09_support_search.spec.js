// import Actions from "../../framework/Actions";
// import Asserts from "../../framework/Asserts";
//
// describe("Check Support search page works correctly", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//
//     it('should open Support page and perform search by Product name', function () {
//         perform.signInActions.openWebsiteAndLogin();
//
//         perform.supportActions.openSupportPage();
//         check.supportAsserts.checkSearchSupportPageIsOpened();
//         perform.supportActions.performSearchByProductName();
//         perform.supportActions.selectAndOpenFindPrinter();
//         check.supportAsserts.checkSupportPageIsOpened();
//     });
//     it('should open Support page and perform search by Serial Number', function () {
//         perform.signInActions.openWebsiteAndLogin();
//
//         perform.supportActions.openSupportPage();
//         check.supportAsserts.checkSearchSupportPageIsOpened();
//         perform.supportActions.performSearchBySerialNumber();
//         check.supportAsserts.checkThatPrintersPageWasOpened();
//     });
// });
