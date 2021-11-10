import CommonElements from "../../locators/CommonElements";
import printersData from "../../../data/printers";
import MainHeaderElements from "../../locators/00_mainHeader/MainHeaderElements";
import SupportElements from "../../locators/10_support/SupportElements";

class MainHeaderActions {
    openInkJetBusinessPrinters(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.inkJet.business).click({force:true});
    };
    openLaserColourPrinters(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.laserPrinters.colour).click({force:true});
    };
    openLabelMakerRemotePrinters(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name3).click({force:true});
    };
    openDotMatrixPrintersPage(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.dotMatrix.name2).click({force:true});
    };
    openLargeFormatPrintersPage(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.largeFormat.name).click({force:true});
    };
    openLabelMarkerPrintersPage(){
        cy.get(MainHeaderElements.cssBlock_CmsComponent).invoke('show')
        cy.contains(printersData.labelMaker.name4).click({force:true});
    };

}
export default MainHeaderActions