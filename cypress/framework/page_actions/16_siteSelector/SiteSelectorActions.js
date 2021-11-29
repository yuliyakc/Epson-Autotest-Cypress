import SiteSelectorElements from "../../locators/16_siteSelector/SiteSelectorElements";

class SiteSelectorActions {
    clickTopNavigationBtnToOpenCountriesList(){
        cy.get(SiteSelectorElements.cssBtn_NavigationTopList).click();
    };
    selectGermanyWebsite(){
        cy.get("select").select("epson-de")
    };

}
export default SiteSelectorActions