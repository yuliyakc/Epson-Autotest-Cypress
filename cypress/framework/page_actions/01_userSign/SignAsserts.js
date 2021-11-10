import SignUpElements from "../../locators/01_userSign/SignUpElements";

class SignAsserts {
    checkErrorMessage(){
        cy.xpath(SignUpElements.xpathError_IncorrectRegisterData).should("be.visible");
    };
    checkIncorrectEmailError(){
        cy.get(SignUpElements.cssText_EmailError).should("be.visible");
    };
    checkUserLogsOut(){
        return cy.url()
            .should('include', '/?loggedOut=true');
    };
}
export default SignAsserts