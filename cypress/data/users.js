const UNIQID = Cypress.env('UNIQID')

module.exports = {
    "register": {
        "firstName" : "John",
        "lastName" : "Smith",
        "email": `maria.bobrova+${UNIQID}@keenethics.com`,
        "password": "Qwe123456!",
        "newPassword": "Qwe13579!",
        "fullName":"J.Smith"
    },
    "purchase": {
        "country" : "GB",
        "addressNickname": "Address Title",
        "telephone": "+442079460000",
        "companyName": "Test company",
        "addressFinder": "Flat, Boston & County Club Ltd, Park Gate , Boston, PE21 6RL{enter}",
        "shippingAddress": "Selborne Mount",
        "address2" : "Bradford, BD9,",
        "town": "Bradford",
        "postcode" : "BD9 4NP",
    },
    "address":{
        "nickname": "Title",
        "firstName": "John",
        "lastName": "Doe",
        "companyName": "Autotest",
        "default": "Default Address",
        "telephone": "+442079460001",
    },
    "address2":{
        "nick": "Nick",
        "firstName": "Joe",
        "lastName":"Smith",
        "companyName" : "Testers",
        "default": "Baker str 221bB"
    },
    "passChange":{
        "email": "maria.bobrova+1@keenethics.com",
        "newPassword": "Qwe13579!",
        "oldPassword": "Qwe123456!"
    }
}