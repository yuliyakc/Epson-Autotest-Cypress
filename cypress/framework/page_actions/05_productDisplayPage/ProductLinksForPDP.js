class ProductLinksForPDP {
    openEcoTankPrinterPDPPage(){
        cy.visitWebsite("/products/printers/inkjet/consumer/ecotank-et-m1120/p/23162?suggestionClicked=true")
    };
    openEasyMailProduct(){
        cy.visitWebsite("/products/ink-and-paper/ink-consumables/multipack-4-colours-502-easymail/p/28879");
    };
    openSpecificOptionPDPPage(){
        cy.visitWebsite("/products/options/epson-sidm-roll-paper-holder-and-cover-for-lq-50/p/8667?suggestionClicked=true")
    };
}
export default ProductLinksForPDP