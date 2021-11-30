import SignUpElements from "../../locators/01_userSign/SignUpElements";
import usersData from "../../../data/users";
import CommonElements from "../../locators/CommonElements";

class SignUpActions {
    enterRequiredDataForRegistration(){
      cy.get(SignUpElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
      cy.get(SignUpElements.idInput_LastName).click().clear().type(usersData.register.lastName);
      cy.get(SignUpElements.idInput_Email).click().clear().type(usersData.register.email);
      cy.get(SignUpElements.idInput_ConfirmEmail).click().clear().type(usersData.register.email);
      cy.get(SignUpElements.idInput_Password).click().clear().type(usersData.register.password);
      cy.get(SignUpElements.idInput_ConfirmPassword).click().clear().type(usersData.register.password);
    };
    enterIncorrectDataForRegistration(){
        cy.get(SignUpElements.idInput_FirstName).click().type("qwe");
        cy.get(SignUpElements.idInput_LastName).click().type("qwerty");
        cy.get(SignUpElements.idInput_Email).click().type("qwe@");
        cy.get(SignUpElements.idInput_ConfirmEmail).click().type("qwe@");
        cy.get(SignUpElements.idInput_Password).click().type(usersData.register.password);
        cy.get(SignUpElements.idInput_ConfirmPassword).click().type(usersData.register.password);
    };
    EnterRequiredInfoButWithoutEmails(){
        cy.get(SignUpElements.idInput_FirstName).click().clear().type(usersData.register.firstName);
        cy.get(SignUpElements.idInput_LastName).click().clear().type(usersData.register.lastName);
        cy.get(SignUpElements.idInput_Password).click().clear().type(usersData.register.password);
        cy.get(SignUpElements.idInput_ConfirmPassword).click().clear().type(usersData.register.password);
    };
    enterEmailsWithMissingDot(){
        cy.get(SignUpElements.idInput_Email).click().clear().type(usersData.register.email2);
        cy.get(SignUpElements.idInput_ConfirmEmail).click().clear().type(usersData.register.email2);
    };
    enterEmailWithMissingEt(){
        cy.get(SignUpElements.idInput_Email).click().clear().type(usersData.register.email3);
        cy.get(SignUpElements.idInput_ConfirmEmail).click().clear().type(usersData.register.email3);
    };
    enterEmailWithComma(){
        cy.get(SignUpElements.idInput_Email).click().clear().type(usersData.register.email4);
        cy.get(SignUpElements.idInput_ConfirmEmail).click().clear().type(usersData.register.email4);
    };
    enterEmailWithSymbols(){
        cy.get(SignUpElements.idInput_Email).click().clear().type(usersData.register.email5);
        cy.get(SignUpElements.idInput_ConfirmEmail).click().clear().type(usersData.register.email5);
    };
    enterRegisteredEmail(){
        cy.get(SignUpElements.idInput_GuestEmail).click().type(usersData.register.email);
    };
    setCustomerTypePersonal(){
      cy.get(SignUpElements.idRadio_PersonalType).click();
    };
    setAgeRequirements(){
      cy.get(SignUpElements.idCheckbox_UnderageNo).click();
    };
    setTermsOfUse(){
      cy.get(SignUpElements.idCheckbox_TermsCheck).click();
    };
    submitAndRegisterBtnClick(){
        cy.get(SignUpElements.cssButton_Submit).click();
        //cy.get(CookiesDialogElements.idModal_AcceptCookies).click()
    };
    enterExistedEmailFromData(){
        cy.get(SignUpElements.idInput_GuestEmail).click().type(usersData.register.email);
    };
    clickCheckoutAsGuestBtn(){
      cy.get(SignUpElements.cssBtn_CheckoutAsGuest).click();
    };
    enterEmailAndPasswordForOldUser(){
      cy.get(SignUpElements.idInput_ConfirmEmail).click().type(usersData.register.email);
      cy.get(SignUpElements.idInput_Password).click().type(usersData.register.password);
      cy.get(SignUpElements.idInput_ConfirmPassword).click().type(usersData.register.password);
    };
    enterEmailAndPasswordForAGuest(){
        cy.get(SignUpElements.idInput_ConfirmEmail).click().type(usersData.guest.email);
        cy.get(SignUpElements.idInput_Password).click().type(usersData.guest.password);
        cy.get(SignUpElements.idInput_ConfirmPassword).click().type(usersData.guest.password);
    };
    acceptTermsAsAGuest(){
      cy.get(SignUpElements.cssCheckbox_TermsOFUse).click();
    };
    createNewAccount(){
      cy.get(CommonElements.cssBtn_BtnPrimary).eq(2).click();
    };
    enterNewEmailFromData(){
        cy.get(SignUpElements.idInput_GuestEmail).click().type(usersData.guest.email);
    };



}
export default SignUpActions