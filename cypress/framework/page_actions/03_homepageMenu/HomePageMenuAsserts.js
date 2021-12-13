import linksData from "../../../data/links";

class HomePageMenuAsserts {
    checkHomePageServerResponseStatusIs200(){
        cy.request("https://epson-gb.cbnd-seikoepso3-s2-public.model-t.cc.commerce.ondemand.com/en_GB/")
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetPrintersServerCorrectResponse(){
        cy.request(linksData.printers.inkJetPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetConsumerPrintersServerCorrectResponse(){
        cy.request(linksData.printers.inkJetConsumer)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetPhotoPrintersServerCorrectResponse(){
        cy.request(linksData.printers.inkJetPhoto)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetBusinessPrintersServerCorrectResponse(){
        cy.request(linksData.printers.inkJetBusiness)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetMicroBusinessPrintersServerCorrectResponse(){
        cy.request(linksData.printers.inkJetMicroBusiness)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLaserPrintersServerCorrectResponse(){
        cy.request(linksData.printers.laserPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLaserMonochromeServerCorrectResponse(){
        cy.request(linksData.printers.laserMonochrome)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLaserColourServerCorrectResponse(){
        cy.request(linksData.printers.laserColour)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkDotMatrixPrintersServerCorrectResponse(){
        cy.request(linksData.printers.laserColour)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLargeFormatPrintersServerCorrectResponse(){
        cy.request(linksData.printers.largeFormatPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelMakerPrintersServerCorrectResponse(){
        cy.request(linksData.printers.labelMakerPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelRemoteServerCorrectResponse(){
        cy.request(linksData.printers.remote)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelPcConnectedServerCorrectResponse(){
        cy.request(linksData.printers.pcConnected)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelPcRemoteServerCorrectResponse(){
        cy.request(linksData.printers.pcRemote)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkProjectorsMainPageCorrectResponse(){
        cy.request(linksData.projectors.mainPage)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkUltraMobilePageCorrectResponse(){
        cy.request(linksData.projectors.ultraMobile)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkMobilePageCorrectResponse(){
        cy.request(linksData.projectors.mobile)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkShortPageCorrectResponse(){
        cy.request(linksData.projectors.short)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkUltraShortPageCorrectResponse(){
        cy.request(linksData.projectors.ultraShort)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInstallationPageCorrectResponse(){
        cy.request(linksData.projectors.installation)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkAllInOnePageCorrectResponse(){
        cy.request(linksData.projectors.allInOne)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkHomeCinemaPageCorrectResponse(){
        cy.request(linksData.projectors.homeCinema)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkLabelMakersCorrectResponse(){
        cy.request(linksData.ink.labelMakers)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkShopOnlineForHomeCorrectRedirect(){
        cy.request(linksData.shopOnline.home)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkShopOnlineForBusinessCorrectRedirect(){
        cy.request(linksData.shopOnline.business)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };










}
export default HomePageMenuAsserts