// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cy-verify-downloads').addCustomCommand();

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

import '@testing-library/cypress/add-commands';
import 'cypress-iframe';
const UNIQID = Cypress.env('UNIQID')
const ENTER_SPECIFIC_PRINTER    = "/products/printers/inkjet/consumer/ecotank-et-2750/p/30907";

// Cypress.Commands.add('getIframe', (iframe) => {
//     return cy.get(iframe)
//         .its('0.contentDocument.body')
//        // .should('be.visible')
//         .then(cy.wrap);
// })

Cypress.Commands.add("visitWebsite", (url) => {
    cy.visit(Cypress.env('WEBSITE_URL') + url, {
    });
});

Cypress.Commands.add("openAccountList", (url) => {
    cy.openWebsite(ACCOUNTS_LIST_PAGE + url);

});

const getIframeDocument = (iframe) => {
    return cy
        .get(iframe).eq(0)
        .its('contentDocument').should('exist')
}

Cypress.Commands.add('getIframe', (iframe) => {
    return getIframeDocument(iframe)
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
});
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

Cypress.Commands.add("visitWebsite", (url) => {
    cy.visit(Cypress.env('WEBSITE_URL') + url, {
    })
});

Cypress.Commands.add('selectCardToPay', (iframeSelector, elSelector) => {
    cy.get("label[for='paymentMethod-adyen_cc']")
        .click();

    return cy
        .get(`iframe${iframeSelector || ''}`, { timeout: 10000 })
        .should($iframe => {
            expect($iframe.contents().find(elSelector||'body')).to.exist
        })
        .then($iframe => {
            const $body = $iframe.contents().find('body');

            cy.wrap( $body.find('input[id="encryptedCardNumber"]') )
                .click({ force: true })
                .type( "5555 4444 3333 1111");
            cy.wrap( $body.find('input[id="encryptedExpiryDate"]') )
                .click({ force: true })
                .type("0330" );
            cy.wrap( $body.find('input[id="encryptedSecurityCode"]') )
                .click({ force: true })
                .type("737");
        });
});
//Cypress.Commands.add('setKlarnaToPay')