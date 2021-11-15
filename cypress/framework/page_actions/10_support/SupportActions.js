import printersData from "../../../data/printers";
import CommonElements from "../../locators/CommonElements";
import SupportElements from "../../locators/10_support/SupportElements";
import supportsData from "../../../data/supports";
import MainHeaderElements from "../../locators/00_mainHeader/MainHeaderElements";

class SupportActions{
    openInkJetProphotoPrinters(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.inkJet.prophoto).click({force:true});
    };
    clickBtnAndDownloadTheFile(){
        cy.get('.btn.btn-primary').eq(3).click();
        //cy.verifyDownload('epson632306eu.exe', { timeout: 55000, interval: 500 });
    };
    clickBtnAndDownloadTheDocFile(){
        cy.get('.btn.btn-primary').eq(11).click();
       // cy.verifyDownload('epson632306eu.exe', { timeout: 55000, interval: 500 });
    };//contains(text
    openFaqTabByClickOnABtn(){
        cy.get(SupportElements.cssTab_Faq).click();
    };
    typeTextToSearchInputAndSearch(){
        cy.get(SupportElements.cssInput_SearchField).click().type(supportsData.support.search);
        cy.get(SupportElements.cssBtn_SearchBtn).click();
    };
    clickSecondResult(){
      cy.get(SupportElements.cssList_FAQsSecondElement).click();
    };
    clickThirdResult(){
        cy.get(SupportElements.cssList_FAQsThirdElement).click();
    };
    openManualsTabByClickOnABtn(){
        cy.get(SupportElements.cssTab_ManualsDocs).click();
    };
    openOptionsTabByClickOnABtn(){
        cy.get(SupportElements.cssTab_Warranty).click();
    };
    openToggleOfADownloadTab(){
        cy.get(SupportElements.cssToggle_SupportResource).eq(0).click();
    };
    openToggleOfADocsTab(){
        cy.get(SupportElements.cssToggle_SupportResource).eq(7).click();
    };
    clickRegisterNowBtn(){
        cy.get(SupportElements.cssBtn_RegisterNow).click();
    };
    clickCheckYourWarrantyBtn(){
      cy.get(SupportElements.cssBtn_Button).eq(10).click();
    };
    clickCheckExtendedWarrantyBtn(){
        cy.get(SupportElements.cssBtn_Button).eq(11).click();
    };
    clickContactUsButton(){
      cy.get(SupportElements.cssTab_ContactUs).click();
    };
    clickChatNowBtn(){
        cy.get(SupportElements.cssBtn_ChatNow).click();
    };
    clickOnFindRepairButton(){
        cy.wait(2000);
      cy.get(SupportElements.cssBtn_FindRepairCenter).click({force:true});
    };
    selectOperatingSystem(){
      cy.get(SupportElements.idSelect_OperatingSystems).select("macOS 11 (Big Sur)", {force:true});
    };
    clickGoBtn(){
        cy.get(SupportElements.cssBtn_Go).click();
    };
    goToPrintersHomePage(){
      cy.get(SupportElements.cssBtn_PrintersHomePage).click();
    };
    openSupportPage(){
        cy.get(SupportElements.cssLink_Support).click();
    };
    performSearchByProductName(){
      cy.get(SupportElements.cssInput_ProductName).click().type(supportsData.support.searchName);
      cy.xpath(SupportElements.xpathBtn_Search).click();
    };
    selectAndOpenFindPrinter(){
        cy.xpath(SupportElements.xpathResult_SearchResult).click();
    };
    openFindPrinterFromSearchResults(){
        cy.get(SupportElements.cssBtn_SearchResult).click();
    }
    performSearchBySerialNumber(){
      cy.get(SupportElements.cssInput_SerialNumber).click().type(supportsData.support.searchSerial)
        cy.wait(500)
        cy.xpath(SupportElements.xpathBtn_Check).click({force:true});
    };
    clickSupportBtnFromPLP(){
        cy.get(SupportElements.cssBtn_SupportPLP).first().click()
        //cy.wait(2000);
    };





}
export default SupportActions