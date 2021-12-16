import CommonElements from "../../locators/CommonElements";
import supportsData from "../../../data/supports";
import SupportElements from "../../locators/10_support/SupportElements";

class SupportAsserts {
    checkSearchSupportPageIsOpened(){
        cy.url().should("include", "/support");
    };
    checkSupportPageIsOpened(){
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(supportsData.support.breadcrumbs);
        cy.get(SupportElements.cssTab_Support).should("be.visible");
    };
    checkThatPrintersPageWasOpened(){
        cy.url().should("include", "support/sc/epson-workforce-wf-2520nf/s/s1117");
    };
    checkSupportSku(){
        cy.get(SupportElements.cssNumber_ModelSkuNumber).should("be.visible");
    };
    checkFaqPageIncludeSearchInput(){
        cy.get(SupportElements.cssInput_SearchField).should("be.visible");
    };
    checkSearchResultsIsDisplayed(){
        cy.wait(2000);
        cy.get(SupportElements.cssBlock_FAQsContainer).should("be.visible");
    };
    checkItemsForTopFAQList(){
        cy.get(SupportElements.cssList_QuestionsResult).should("be.visible");
    };
    checkItemsForSecondResult(){
        cy.get(SupportElements.cssList_QuestionsResult).should("be.visible");
    };
    checkItemsForThirdResult(){
        cy.wait(1000);
        cy.get(SupportElements.cssList_QuestionsResult).should("be.visible");
    };
    checkActiveTabContainsBlocks(){
        cy.get("div").should("have.class", "tab-panel__content")
            .and("have.class","tab-panel__section-inner")
            .and("have.class", "tab-panel__section-content");
    };
    checkDocsToggleDescription(){
        cy.get(".accordion-toggle__content").eq(12).should("be.visible");
    };
    checkDownloadToggleDescription(){
        cy.get(".accordion-toggle__group").eq(0).should("be.visible");
    };
    checkFirstBlockIsVisible(){
        cy.get(SupportElements.cssBlock_SupportOptions).eq(0).should("be.visible");
    };
    checkSecondBlockIsVisible(){
        cy.get(SupportElements.cssBlock_SupportOptions).eq(1).should("be.visible");
    };
    checkThirdBlockIsVisible(){
        cy.get(SupportElements.cssBlock_SupportOptions).eq(2).should("be.visible");
    };
    checkContactUsFirstBlock(){
        cy.get(SupportElements.cssBlock_SupportOptions).eq(3).should("be.visible");
    };
    checkThatCorrectPageIsOpened(){
        cy.url().should("contain", "/en_GB/support");
    };
    checkCorrectPageIsOpened(){
        cy.url().should("contain", "/en_GB/");
    };
    checkChatWasOpened(){
        cy.get(SupportElements.idModal_Chat).should("be.visible");
    };
    checkWidgetIsOpened(){
        cy.get(SupportElements.cssWidget_Main).should("be.visible");
    };
    checkNewOSInAddressLink(){
        cy.url().should("include", "selected-os=macOS+11");
    };
    checkPrintersHomePage(){
        cy.url().should("include", "/inkjet/prophoto-and-graphic-arts/expression-photo-hd-xp-15000/");
    };
    checkSupportDownloadsTabIsActive(){
        cy.get(SupportElements.cssTab_ActiveTab).should("contain", "Downloads");
    };
    checkSupportPanelIsDisplayed(){
      cy.get(SupportElements.cssBlock_SupportPanel).should("be.visible");
    };
    checkOperatingSystemListIsVisible(){
        cy.get(SupportElements.cssBLock_OperatingSystemList).should("be.visible");
    };
}
export default SupportAsserts