import HeaderElements from "../../locators/00_header/HeaderElements";

class SignOutActions {
    clickSignOutBtn(){
        cy.get(HeaderElements.cssButton_SignOut).click();
    };
}
export default SignOutActions