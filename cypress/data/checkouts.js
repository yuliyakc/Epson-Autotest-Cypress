const UNIQID = Cypress.env('UNIQID')

module.exports = {
    "price": {
        "forOne": "349.99",
        "forTwo": "699.98",
        "withDiscount": "49.99",
        "withVoucher": "262.49"

    },
    "discount": {
        "name": "S2-Automation",
        "price": "30.00"
    },
    "shippingMethods": {
        "standard": "gb-ups-standard-149",
        "electronic": "gb-electronic-free",
        "easymail": "gb-deutschepost-easymail-508",
    },


}

