class ProductLinksForPDP {
    openEcoTankPrinterPDPPage(){
        cy.visitWebsite("/products/printers/inkjet/consumer/ecotank-et-m1120/p/23162?suggestionClicked=true");
    };
    openEasyMailProduct(){
        cy.visitWebsite("/products/ink-and-paper/ink-consumables/multipack-4-colours-502-easymail/p/28879");
    };
    openSpecificOptionPDPPage(){
        cy.visitWebsite("/products/options/epson-sidm-roll-paper-holder-and-cover-for-lq-50/p/8667?suggestionClicked=true");
    };
    openEcoTankPrinter(){
        cy.visitWebsite("/products/printers/inkjet/consumer/ecotank-et-2750/p/30907");
    };
    openWorkForcePrinterPDP(){
        cy.visitWebsite("/products/printers/inkjet/microbusiness/workforce-wf-2010w/p/11998");
    };
    openMediaPaperProduct(){
      cy.visitWebsite("/products/ink-and-paper/paper-and-media/ultra-glossy-photo-paper---a4---15-sheets/p/1640");
    };
    openDotMatrixPrinter(){
      cy.visitWebsite("/products/printers/dot-matrix/lq-350/p/12058");
    };
    openInkJetHomeXPPrintersPdp(){
        cy.visitWebsite("/products/printers/inkjet/consumer/expression-home-xp-2100/p/27260");
    };
}
export default ProductLinksForPDP