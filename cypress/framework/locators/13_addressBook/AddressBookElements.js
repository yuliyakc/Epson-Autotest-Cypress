class AddressBookElements {
    static xpathBtn_AddressCreation = "//a[contains(text(),'Add Address')]";
    static xpathBtn_ManualAddress = "//a[contains(text(),'Enter address manually')]";
    static cssText_AddressTitle = " div:nth-child(1) > div.address-details > div.address-details__title";
    static cssText_AddressFistName = ".address-list__address:nth-child(1) > .address-details"
    static cssBtn_AddressEdit = ".address-list__address:nth-child(1) .address-list__address-cta:nth-child(1)";
    static cssBtn_AddressDelete = ".address-list__address:nth-child(1) .address-list__address-cta:nth-child(2)";
    static cssBtn_CancelDeletion = ".simple-modal__content div > div.simple-modal__confirm-buttons > a:nth-child(1)";
    static cssBtn_DeleteTheAddress = ".simple-modal__content div > div.simple-modal__confirm-buttons > a:nth-child(2)";

}
export default AddressBookElements