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

}
export default Asserts