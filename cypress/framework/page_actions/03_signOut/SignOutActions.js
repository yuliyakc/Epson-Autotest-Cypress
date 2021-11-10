import SignOutElements from "../../locators/03_signOut/SignOutElements";

class SignOutActions {
    clickSignOutBtn(){
        cy.get(SignOutElements.cssButton_SignOut).click();
        //cy.get(CommonElements.idModal_AcceptCookies).click();
    };
}
export default SignOutActions