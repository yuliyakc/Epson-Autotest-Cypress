import linksData from "../../../data/links";

class FooterAsserts {
    checkPrintersAllInOneHaveCorrectResponseAndLink(){
        cy.url().should("include", "products/printers/c/printers")
        cy.request(linksData.product.printersAllInOne)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkScannersHaveCorrectResponseAndLink(){
        cy.url().should("include", "products/scanners/c/scanner")
        cy.request(linksData.product.scanners)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkProjectorsDisplayHaveCorrectResponseAndLink(){
        cy.url().should("include", "products/projectors/c/projector")
        cy.request(linksData.product.projectorsDisplay)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkProfImagingHaveCorrectResponseAndLink(){
        cy.url().should("include", "products/c/pro-imaging")
        cy.request(linksData.product.profImaging)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkPrintersHaveCorrectResponseAndLink(){
        cy.url().should("include", "products/printers/large-format/c/lfp")
        cy.request(linksData.support.printers)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkScannerHaveCorrectResponseAndLink(){
        cy.url().should("include", "support/scanners")
        cy.request(linksData.support.scanner)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkProjectorHaveCorrectResponseAndLink(){
        cy.url().should("include", "support/projectors")
        cy.request(linksData.support.projector)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkWearablesHaveCorrectResponseAndLink(){
        cy.url().should("include", "support/wearales")
        cy.request(linksData.support.wearables)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkK12EducationHaveCorrectResponseAndLink(){
        cy.url().should("include", "k12Education")
        cy.request(linksData.industries.k12Education)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkHigherEducationHaveCorrectResponseAndLink(){
        cy.url().should("include", "higher-education")
        cy.request(linksData.industries.higherEducation)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkFinancialHaveCorrectResponseAndLink(){
        cy.url().should("include", "financials")
        cy.request(linksData.industries.financial)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkHealthCareHaveCorrectResponseAndLink(){
        cy.url().should("include", "health-care")
        cy.request(linksData.industries.healthCare)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkAppleCompatibilityHaveCorrectResponseAndLink(){
        cy.url().should("include", "apple-compatibility")
        cy.request(linksData.technologies.appleCompatibility)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkDirectPrintingHaveCorrectResponseAndLink(){
        cy.url().should("include", "direct-cd-dvd-print")
        cy.request(linksData.technologies.directPrinting)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkDocCaptureProHaveCorrectResponseAndLink(){
        cy.url().should("include", "document-capture-pro")
        cy.request(linksData.technologies.docCapturePro)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkPrintScanSolutionsHaveCorrectResponseAndLink(){
        cy.url().should("include", "print-scan-solutions")
        cy.request(linksData.technologies.printScanSolutions)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkAboutUsHaveCorrectResponseAndLink(){
        cy.url().should("include", "about-us")
        cy.request(linksData.company.aboutUs)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkOurHistoryHaveCorrectResponseAndLink(){
        cy.url().should("include", "our-history")
        cy.request(linksData.company.ourHistory)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkContactUsHaveCorrectResponseAndLink(){
        cy.url().should("include", "contact-us")
        cy.request(linksData.company.contactUs)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
}
export default FooterAsserts