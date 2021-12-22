import usersData from "../../../data/users";
import SignInElements from "../../locators/01_userSign/SignInElements";
import CookiesDialogElements from "../../locators/17_cookiesDialog/CookiesDialogElements";
import HomePageMenuElements from "../../locators/03_homepageMenu/HomePageMenuElements";

class SignInActions {
    openWebsiteAndLogin(){
        cy.visitWebsite("/");
        cy.viewport(1200, 800);
        cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
        cy.get(HomePageMenuElements.cssButton_CreateAccount).click();
        cy.get(SignInElements.idInput_Email).click().type(usersData.register.email);
        cy.get(SignInElements.idInput_Password).click().type(usersData.register.password);
        cy.get(SignInElements.idBtn_Login).click();
    };
    openSiteAndLoginAccountForPassChange(){
        cy.visitWebsite("/");
        cy.viewport(1200, 800);
        cy.get(CookiesDialogElements.idModal_AcceptCookies).click();
        cy.get(HomePageMenuElements.cssButton_CreateAccount).click();
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
    };


}
export default SignInActions