import linksData from "../../../data/links";

class HomePageMenuAsserts {
    checkHomePageServerResponseStatusIs200(){
        cy.request("https://epson-gb.cbnd-seikoepso3-s2-public.model-t.cc.commerce.ondemand.com/en_GB/")
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetPrintersServerCorrectResponse(){
        cy.request(linksData.link.inkJetPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetConsumerPrintersServerCorrectResponse(){
        cy.request(linksData.link.inkJetConsumer)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetPhotoPrintersServerCorrectResponse(){
        cy.request(linksData.link.inkJetPhoto)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetBusinessPrintersServerCorrectResponse(){
        cy.request(linksData.link.inkJetBusiness)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkInkJetMicroBusinessPrintersServerCorrectResponse(){
        cy.request(linksData.link.inkJetMicroBusiness)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLaserPrintersServerCorrectResponse(){
        cy.request(linksData.link.laserPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLaserMonochromeServerCorrectResponse(){
        cy.request(linksData.link.laserMonochrome)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLaserColourServerCorrectResponse(){
        cy.request(linksData.link.laserColour)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkDotMatrixPrintersServerCorrectResponse(){
        cy.request(linksData.link.laserColour)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLargeFormatPrintersServerCorrectResponse(){
        cy.request(linksData.link.largeFormatPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelMakerPrintersServerCorrectResponse(){
        cy.request(linksData.link.labelMakerPrinters)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelRemoteServerCorrectResponse(){
        cy.request(linksData.link.remote)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelPcConnectedServerCorrectResponse(){
        cy.request(linksData.link.pcConnected)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };
    checkLabelPcRemoteServerCorrectResponse(){
        cy.request(linksData.link.pcRemote)
            .then((response) => {
                expect(response.status).to.eq(200)
            });
    };

}
export default HomePageMenuAsserts