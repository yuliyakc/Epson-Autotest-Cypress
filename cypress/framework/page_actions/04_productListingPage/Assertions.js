import CommonElements from "../../locators/CommonElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import SignUpElements from "../../locators/01_userSign/SignUpElements";
import filtersData from "../../../data/filters";
import printersData from "../../../data/printers";
import supportsData from "../../../data/supports";
import SupportElements from "../../locators/10_support/SupportElements";
import ConsumablesElements from "../../locators/08_extraAccessories/ConsumablesElements";
import CartElements from "../../locators/07_basket/CartElements";

class Assertions {
    checkConsumablePage(){
      cy.get(CheckoutElements.cssBlock_ConsumablesPage).should("be.visible");
    };
    checkActiveDotFilters(){
        cy.get(CommonElements.cssBlock_ActiveFilter)
            .children()
            .should('contain', filtersData.info.name);
            //.and('contain', filtersData.info.priceFromTo);
    };
    checkActiveFilter(){
        cy.get(CommonElements.cssBlock_ActiveFilter).eq(0).should("be.visible");
    };
    checkInkQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("be.visible");
    };
    checkDotMatrixQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("be.visible");
    };
    checkLaserQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("be.visible");
    };
    checkSecondPageIsOpened(){
        cy.url()
            .should("include", "page=1");
    };
    checkThirdPageIsOpened(){
        cy.url()
            .should("include", "page=2");
    };
    checkSortingApplyAscending(){
        cy.url()
            .should("include", "sort=price-asc");
    };
    checkSortingApplyDescending(){
        cy.url()
            .should("include", "sort=price-desc");
    };
    checkSortingByNameApplyDescending(){
        cy.url()
            .should("include", "sort=name-desc");
    };
    checkSortingByNameApplyAscending(){
        cy.url()
            .should("include", "sort=name-asc");
    };
    checkConsumerPageIsOpened(){
      cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.consumer.name2);
    };
    checkMonochromePageIsOpened(){
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.laserMonochrome.name);
    };
    checkBothRemoteAndConnectedPageIsOpened(){
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.labelMaker.name2);
    };
    checkDotMatrixPrintersPageIsOpened(){
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.dotMatrix.name2);
    };
    checkLFPPageIsOpened(){
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.largeFormat.name2);
    };
    checkLearnMorePageIsOpened(){
        cy.get('div')
            .should('have.class', 'product-summary')
            .and('have.class', 'tab-panel');
    };
    checkMainProductsQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("have.length",  15);
    };
    checkLabelMakerProductsQuantity(){
        cy.get("div[class='product-card product-card--plp']").should("be.visible");
    };
    checkActiveFilterIsAbsent(){
        cy.get(CommonElements.cssBlock_ActiveFilter).should('not.exist')
    };





}
export default Assertions