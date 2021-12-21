import usersData from "../../../data/users";
import SignInElements from "../../locators/01_userSign/SignInElements";
import HeaderElements from "../../locators/00_header/HeaderElements";
import CookiesDialogElements from "../../locators/17_cookiesDialog/CookiesDialogElements";

class SignInActions {
    openWebsiteAndLogin(){
        cy.visitWebsite("/");
        cy.viewport(1200, 800);
        cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
        cy.get(HeaderElements.cssButton_CreateAccount).click();
        //cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
        cy.get(SignInElements.idInput_Email).click().type(usersData.register.email);
        cy.get(SignInElements.idInput_Password).click().type(usersData.register.password);
        cy.get(SignInElements.idBtn_Login).click();
        // cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
    };
    openSiteAndLoginAccountForPassChange(){
        cy.visitWebsite("/");
        cy.viewport(1200, 800);
        cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
        cy.get(HeaderElements.cssButton_CreateAccount).click();
        cy.get(SignInElements.idInput_Email).click().type(usersData.passChange.email);
        cy.get(SignInElements.idInput_Password).click().type(usersData.passChange.oldPassword);
        cy.get(SignInElements.idBtn_Login).click();
    };
    enterEmailToLogin(){
        cy.get(SignInElements.idInput_Email).click().type(usersData.register.email);
    };
    enterPasswordToLogin(){
        cy.get(SignInElements.idInput_Password).click().type(usersData.register.password);
    };
    enterEmailForPasswordChange(){
        cy.get(SignInElements.idInput_Email).click().type(usersData.passChange.email);
    };
    enterNewPasswordToLogin(){
        cy.get(SignInElements.idInput_Password).click().type(usersData.passChange.newPassword);
    };
    clickLogInBtn(){
        cy.get(SignInElements.idBtn_Login).click();
        // cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
    };


}
export default SignInActions