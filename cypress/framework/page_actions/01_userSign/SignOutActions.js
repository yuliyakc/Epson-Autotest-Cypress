import HomePageMenuElements from "../../locators/03_homepageMenu/HomePageMenuElements";

class SignOutActions {
    clickSignOutBtn(){
        cy.get(HomePageMenuElements.cssButton_SignOut).click();
    };
}
export default SignOutActions