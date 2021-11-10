import MyAccountActions from "./page_actions/11_myAccount/MyAccountActions";
import SignInActions from "../framework/page_actions/01_userSign/SignInActions";
import OrderHistoryActions from "./page_actions/12_ordersHistory/OrderHistoryActions";
import PaginationActions from "../framework/page_actions/04_productListingPage/PaginationActions";
import CartActions from "../framework/page_actions/07_basket/CartActions";
import CommonActions from "./page_actions/CommonActions";
import CheckoutActions from "../framework/page_actions/06_checkout/CheckoutActions";
import SearchActions from "../framework/page_actions/09_search/SearchActions";
import ConsumablesActions from "../framework/page_actions/08_extraAccessories/ConsumablesActions";
import BuyNowPLPActions from "../framework/page_actions/04_productListingPage/BuyNowPLPActions";
import BuyNowPDPActions from "../framework/page_actions/05_productDisplayPage/BuyNowPDPActions";
import SupportActions from "./page_actions/10_support/SupportActions";
import MainHeaderActions from "./page_actions/00_mainHeader/MainHeaderActions";
import LearnMoreActions from "./page_actions/04_productListingPage/LearnMoreActions";
import PageContentRelevanceActions from "./page_actions/04_productListingPage/PageContentRelevanceActions";
import FiltersActions from "./page_actions/04_productListingPage/FiltersActions";
import SortingActions from "./page_actions/04_productListingPage/SortingActions";
import ForgotPassActions from "./page_actions/02_forgotPassword/ForgotPassActions";
import SignUpActions from "./page_actions/01_userSign/SignUpActions";
import SignOutActions from "./page_actions/03_signOut/SignOutActions";
import AddressBookActions from "./page_actions/13_addressBook/AddressBookActions";
import ProductLinksForPDP from "./page_actions/05_productDisplayPage/ProductLinksForPDP";
import UpdateDataActions from "./page_actions/14_updateData/UpdateDataActions";


class Actions {
    paginationActions = new PaginationActions();
    myAccountActions = new MyAccountActions();
    signInActions = new SignInActions();
    orderHistoryActions = new OrderHistoryActions();
    cartActions = new CartActions();
    checkoutActions = new CheckoutActions();
    searchActions = new SearchActions();
    consumablesActions = new ConsumablesActions();
    buyNowPLPActions = new BuyNowPLPActions();
    buyNowPDPActions = new BuyNowPDPActions();
    commonActions = new CommonActions();
    supportActions = new SupportActions();
    mainHeaderActions = new MainHeaderActions();
    learnMoreActions = new LearnMoreActions();
    pageContentRelevanceActions = new PageContentRelevanceActions();
    filtersActions = new FiltersActions();
    sortingActions = new SortingActions();
    forgotPassActions = new ForgotPassActions();
    signUpActions = new SignUpActions();
    signOutActions = new SignOutActions();
    addressBookActions = new AddressBookActions();
    productLinksForPDP = new ProductLinksForPDP();
    updateDetailsActions = new UpdateDataActions();



}

export default Actions