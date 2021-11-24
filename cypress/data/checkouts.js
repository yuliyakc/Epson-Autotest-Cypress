const UNIQID = Cypress.env('UNIQID')

module.exports = {
    "price": {
        "forOne": "349.99",
        "forTwo": "699.98",
        "withDiscount": "49.99",
        "withVoucher": "262.49"

    },
    "discount": {
        "name": "Automation",
        "price": "30.00"
    },
    "shippingMethods": {
        "standard": "gb-ups-standard-149",
        "electronic": "gb-electronic-free",
        "easymail": "gb-deutchepost-easymail-free-508",
    },
    "quantity":{
        "num": "-1{enter}"
    }


}

