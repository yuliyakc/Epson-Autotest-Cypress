import CheckoutAsserts from "../framework/page_actions/06_checkout/CheckoutAsserts";
import Assertions from "../framework/page_actions/04_productListingPage/Assertions";
import CartAsserts from "../framework/page_actions/07_basket/CartAsserts";
import OrderHistoryAsserts from "./page_actions/12_ordersHistory/OrderHistoryAsserts";
import CommonAsserts from "../framework/page_actions/CommonAsserts";
import MyAccAsserts from "./page_actions/11_myAccount/MyAccAsserts";
import ConsumablesAsserts from "./page_actions/08_extraAccessories/ConsumablesAsserts";
import SupportAsserts from "./page_actions/10_support/SupportAsserts";
import ForgotPassAsserts from "./page_actions/02_forgotPassword/ForgotPassAsserts";
import AddressBookAsserts from "./page_actions/13_addressBook/AddressBookAsserts";
import SignAsserts from "./page_actions/01_userSign/SignAsserts";
import UpdateDataAsserts from "./page_actions/14_updateData/UpdateDataAsserts";
import ComparePrintersAsserts from "./page_actions/15_comparePrinters/ComparePrintersAsserts";
import PdpAssertions from "./page_actions/05_productDisplayPage/pdpAssertions";
import SiteSelectorAsserts from "./page_actions/16_siteSelector/SiteSelectorAsserts";
import CookiesDialogAsserts from "./page_actions/17_cookiesDialog/CookiesDialogAsserts";
import HeaderAsserts from "./page_actions/00_header/HeaderAsserts";
import HomePageMenuAsserts from "./page_actions/03_homepageMenu/HomePageMenuAsserts";
import BuyAccessoriesAsserts from "./page_actions/18_buy_accesories_page/BuyAccessoriesAsserts";
import FooterAsserts from "./page_actions/19_footer/FooterAsserts";


class Asserts {
    assertions = new Assertions();
    cartAsserts = new CartAsserts();
    orderHistoryAsserts = new OrderHistoryAsserts();
    checkoutAsserts = new CheckoutAsserts();
    commonAsserts = new CommonAsserts();
    myAccAsserts = new MyAccAsserts();
    consumablesAsserts = new ConsumablesAsserts();
    supportAsserts = new SupportAsserts();
    forgotPassAsserts = new ForgotPassAsserts();
    addressBookAsserts = new AddressBookAsserts();
    signAsserts = new SignAsserts();
    updateDataAsserts = new UpdateDataAsserts();
    comparePrintersAsserts = new ComparePrintersAsserts();
    pdpAssertions = new PdpAssertions();
    siteSelectorAsserts = new SiteSelectorAsserts();
    cookiesDialogAsserts = new CookiesDialogAsserts();
    headerAsserts = new HeaderAsserts();
    homePageMenuAsserts = new HomePageMenuAsserts();
    buyAccessoriesAsserts = new BuyAccessoriesAsserts();
    footerAsserts = new FooterAsserts();

}
export default Asserts