import SiteSelectorElements from "../../locators/16_siteSelector/SiteSelectorElements";
import CommonElements from "../../locators/CommonElements";

class SiteSelectorActions {
    clickTopNavigationBtnToOpenCountriesList(){
        cy.get(SiteSelectorElements.cssBtn_NavigationTopList)
            .click();
    };
    selectGermanyWebsite(){
        cy.get(SiteSelectorElements.cssSelect_Country)
            .select("epson-de", {force:true})
    };
    selectBelgiumWebsite(){
        cy.get(SiteSelectorElements.cssSelect_Country)
            .select("epson-be", {force:true})
    };
    selectEuropeWebsite(){
        cy.get(SiteSelectorElements.cssSelect_Country)
            .select("epson-eu", {force:true})
    };
    selectFrenchLanguage(){
        cy.get(SiteSelectorElements.cssSelect_Language)
            .select("fr_EU", {force:true})
    };
    clickConfirmButton(){
      cy.get(CommonElements.cssBtn_BtnPrimary).eq(0).click();
    };

}
export default SiteSelectorActions