import CommonElements from "../../locators/CommonElements";
import CheckoutElements from "../../locators/06_checkout/CheckoutElements";
import filtersData from "../../../data/filters";
import printersData from "../../../data/printers";


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
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.dotMatrix.main);
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
    checkPlpPageForSearch(){
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.dotMatrix.searchResult);
    };
    checkLinkAndBreadcrumbForFifthItem(){
      cy.url().should("include", "products/printers/inkjet/consumer/c/consumer");
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.consumer.name2);
    };
    checkLinkAndBreadcrumbForFourthItem(){
        cy.url().should("include", "products/printers/inkjet/c/inkjet");
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.inkJet.main);
    };
    checkLinkAndBreadcrumbForThirdItem(){
        cy.url().should("include", "products/printers/c/printers");
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.printer.main);
    };
    checkLinkAndBreadcrumbForSecondItem(){
        cy.url().should("include", "products/c/categories");
        cy.get(CommonElements.cssBreadcrumbs_PageList).contains(printersData.product.main);
    };
    checkLinkAndBreadcrumbForFirstItem(){
        cy.url().should("include", "en_GB");
        cy.get(CommonElements.cssBreadcrumbs_PageList).should("not.exist");
    };
    checkProductPricingDiscountIsVisible(){
        cy.get(CommonElements.cssBlock_Price).find(CommonElements.cssBlock_DiscountPrice).should('be.visible');
    };



}
export default Assertions