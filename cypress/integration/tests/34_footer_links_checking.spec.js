// import Actions from "../../framework/Actions";
// import Asserts from "../../framework/Asserts";
//
// describe ("Checking of all Footer links to have status 200", ()=> {
//     let perform = new Actions();
//     let check = new Asserts();
//     beforeEach(function () {
//         cy.clearCookies();
//         cy.viewport(1200, 800);
//         perform.signInActions.openWebsiteAndLogin();
//         perform.footerActions.scrollDownToFooter();
//     });
//     it('should open each page and check 200 error is displayed', function () {
//         perform.footerActions.openPrintersAndAllInOnePage();
//         check.footerAsserts.checkPrintersAllInOneHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         // perform.footerActions.openScannersPage();
//         // check.footerAsserts.checkScannersHaveCorrectResponseAndLink();
//         // perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openProjectorsDisplayPage();
//         check.footerAsserts.checkProjectorsDisplayHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openProfImagingPage();
//         check.footerAsserts.checkProfImagingHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openPrintersPage();
//         check.footerAsserts.checkPrintersHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openScannerPage();
//         check.footerAsserts.checkScannerHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openProjectorsPage();
//         check.footerAsserts.checkProjectorHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openProjectorPage();
//         check.footerAsserts.checkWearablesHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openWearablesPage();
//         check.footerAsserts.checkWearablesHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openK12EducationPage();
//         check.footerAsserts.checkK12EducationHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openHigherEducationPage();
//         check.footerAsserts.checkHigherEducationHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openFinancialPage();
//         check.footerAsserts.checkFinancialHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openHealthCarePage();
//         check.footerAsserts.checkHealthCareHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openAppleCompatibilityPage();
//         check.footerAsserts.checkAppleCompatibilityHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openDirectCdDvdPrintingPage();
//         check.footerAsserts.checkDirectPrintingHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openDocumentCaptureProPage();
//         check.footerAsserts.checkDocCaptureProHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openPrintScanSolutionsPage();
//         check.footerAsserts.checkPrintScanSolutionsHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openAboutUsPage();
//         check.footerAsserts.checkAboutUsHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openOurHistoryPage();
//         check.footerAsserts.checkOurHistoryHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//         perform.footerActions.openContactUsPage();
//         check.footerAsserts.checkContactUsHaveCorrectResponseAndLink();
//         perform.commonActions.goBackToPreviousPage();
//
//     });
// });