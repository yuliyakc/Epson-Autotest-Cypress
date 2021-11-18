import Actions from "../../framework/Actions";
import Asserts from "../../framework/Asserts";

describe("Testing of Guest functionality", ()=> {
    let perform = new Actions();
    let check = new Asserts();
    beforeEach(function () {
        cy.clearCookies();
        cy.viewport(1200, 800);
    });
    it('should open website, add product to Cart and register with existed email', function () {
        perform.commonActions.openWebsite()


    });


});