const UNIQID = Cypress.env('UNIQID')

module.exports = {
    "price": {
        "forOne": "349.99",
        "forTwo": "699.98",
        "withDiscount": "49.99",
        "withVoucher30": "319.99",
        "withVoucher100": "249.99",
        "percentagePrice" : "£314.99"
    },
    "discount": {
        "fixedCode30": "Automation_Fixed_Code",
        "fixed100": "Auto_Fixed_Price_100",
        "percentageCode": "Automation_Percentage",
        "price": "£30.00",
        "zeroPrice": "£0.00",
        "applyTextFor30": "You have received £30.00 discount on cart using the coupon code [Automation_Fixed_Code]",
        "applyTextFor100": "You have received £100.00 discount on cart using the coupon code [Auto_Fixed_Price_100]",
        "applyTextForPercentage" : "You have received 10% discount on cart using the coupon code [Automation_Percentage]"
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

