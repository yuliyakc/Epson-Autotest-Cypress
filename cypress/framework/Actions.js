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
import PdpActions from "./page_actions/05_productDisplayPage/pdpActions";
import SupportActions from "./page_actions/10_support/SupportActions";
import HeaderActions from "./page_actions/00_header/HeaderActions";
import LearnMoreActions from "./page_actions/04_productListingPage/LearnMoreActions";
import PageContentRelevanceActions from "./page_actions/04_productListingPage/PageContentRelevanceActions";
import FiltersActions from "./page_actions/04_productListingPage/FiltersActions";
import SortingActions from "./page_actions/04_productListingPage/SortingActions";
import ForgotPassActions from "./page_actions/02_forgotPassword/ForgotPassActions";
import SignUpActions from "./page_actions/01_userSign/SignUpActions";
import SignOutActions from "./page_actions/01_userSign/SignOutActions";
import AddressBookActions from "./page_actions/13_addressBook/AddressBookActions";
import ProductLinksForPDP from "./page_actions/05_productDisplayPage/ProductLinksForPDP";
import UpdateDataActions from "./page_actions/14_updateData/UpdateDataActions";
import ComparePrintersActions from "./page_actions/15_comparePrinters/ComparePrintersActions";
import SiteSelectorActions from "./page_actions/16_siteSelector/SiteSelectorActions";
import CookiesDialogActions from "./page_actions/17_cookiesDialog/CookiesDialogActions";
import HomePageMenuActions from "./page_actions/03_homepageMenu/HomePageMenuActions";
import BuyAccessoriesActions from "./page_actions/18_buy_accesories_page/BuyAccessoriesActions";
import FooterActions from "./page_actions/19_footer/FooterActions";
import PLPInfoActions from "./page_actions/04_productListingPage/PLPInfoActions";


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
    buyNowPDPActions = new PdpActions();
    commonActions = new CommonActions();
    supportActions = new SupportActions();
    headerActions = new HeaderActions();
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
    updateDataActions = new UpdateDataActions();
    comparePrintersActions = new ComparePrintersActions();
    pdpActions = new PdpActions();
    siteSelectorActions = new SiteSelectorActions();
    cookiesDialogActions = new CookiesDialogActions();
    homePageMenuActions = new HomePageMenuActions();
    buyAccessoriesActions = new BuyAccessoriesActions();
    footerActions = new FooterActions();
    plpInfoActions = new PLPInfoActions();

}

export default Actions