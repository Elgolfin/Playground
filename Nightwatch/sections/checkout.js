'use strict';

let checkoutCommands = {
    guest: function() {
        return this.waitForElementPresent('@checkoutGuestBtn', 2000)
            .click('@checkoutGuestBtn');
    },
    login: function (username, password) {
        return this.waitForElementPresent('@checkoutLoginBtn', 2000)
            .click('@checkoutLoginBtn');
    },
    fillAddressInformation: function () {
        return this.waitForElementPresent('@checkoutFormEmail', 2000)
                    .setValue('@checkoutFormEmail', 'test@orckestra.com')
                    .waitForElementPresent('@checkoutFormFirstName', 2000)
                    .setValue('@checkoutFormFirstName', 'First Name Test')
                    .setValue('@checkoutFormLastName', 'Last Name Test')
                    .setValue('@checkoutFormAddress', '123 Test Avenue')
                    .setValue('@checkoutFormCity', 'Test City')
                    .setValue('@checkoutFormProvince', 'Quebec')
                    .setValue('@checkoutFormZipCode', 'H3B 2S2')
                    .setValue('@checkoutFormPhoneNumber', '514 123 4567')
                    .waitForElementNotPresent('@checkoutNextStep', 2000) // We do the check here because we need the focus to be out the postal code input
                    .waitForElementPresent('@checkoutNextStep', 10000);
    },
    selectShippingMethod: function (shippingMethodIndex) {
        shippingMethodIndex = shippingMethodIndex || 0;
        return this.waitForElementPresent('@checkoutFormShippingMethod', 10000)
                    .click('[data-qa=checkout-shipping-method-' + shippingMethodIndex + ']')
                    .waitForElementNotPresent('@checkoutNextStep', 2000)
                    .waitForElementPresent('@checkoutNextStep', 10000);
                    //.click('#ShippingMethod div:nth-of-type(' + shippingMethodIndex + ') input[type=radio]')
    },
    selectPaymentMethod: function (paymentMethodIndex) {
        paymentMethodIndex = paymentMethodIndex || 0;
        let paymentMethodElement = '[data-qa=checkout-payment-method-' + paymentMethodIndex + ']';
        this.waitForElementPresent('@checkoutFormPaymentMethod', 10000);
        // Wait for refreshing the payment methods
        this.click(paymentMethodElement)
            .waitForElementPresent(paymentMethodElement + ' input[type=radio][disabled]', 2000)
            .waitForElementNotPresent(paymentMethodElement + ' input[type=radio][disabled]', 10000);
        return this;
    },
    nextStep: function (username, password) {
        return this.waitForElementPresent('@checkoutNextStep', 10000)
            .click('@checkoutNextStep');
    },
    submitOrder: function () {
        return this.waitForElementPresent('@checkoutSubmitOrderBtn', 10000)
            .click('@checkoutSubmitOrderBtn');
    },
    variables: function() {
        return {
            
        }
    }
};

module.exports = {
    url: 'https://composer-c1-cm-qa.orckestra.local/en-CA/',
    elements: [
        {checkoutGuestBtn: '[data-qa="checkout-as-guest"]'}
        ,{checkoutLoginBtn: '[data-qa="login-submit"]'}
        ,{checkoutSubmitOrderBtn: 'button[data-oc-click="nextStep"]'}
        ,{checkoutNextStep: '[data-qa="checkout-order-summary-next-step"]'}
        ,{checkoutFormEmail: '[data-qa="checkout-guest-info-email"]'}
        ,{checkoutFormFirstName: '[data-qa="checkout-shipping-firstname"]'}
        ,{checkoutFormLastName: '[data-qa="checkout-shipping-lastname"]'}
        ,{checkoutFormAddress: '[data-qa="checkout-shipping-address"]'}
        ,{checkoutFormCity: '[data-qa="checkout-shipping-city"]'}
        ,{checkoutFormProvince: '[data-qa="checkout-shipping-province-selector"]'}
        ,{checkoutFormZipCode: '[data-qa="checkout-shipping-postalcode"]'}
        ,{checkoutFormPhoneNumber: '[data-qa="checkout-shipping-phone"]'}
        ,{checkoutFormShippingMethod: '#ShippingMethod'}
        ,{checkoutFormPaymentMethod: '#PaymentForm'}
        
        
        /*
        ,{searchBox: '[data-qa="search-input"]'}
        ,{btnSearchSubmit: '[data-qa="search-button"]'}
        ,{noResult: 'h2'}
        ,{refiner1Element: 'h2.h4'}
        ,{searchProductName: '[data-qa="search-product-title"]'}
        ,{searchProductPrice: '[data-qa="search-product-price"]'}
        ,{categoryNameLvl1Link: 'a[title="${categoryNameLvl1}"]'}
        ,{categoryNameLvl2Link: 'a[title="${categoryNameLvl2}"]'}
        ,{sortByAscendingProductName: '[data-qa="search-sort-by"] li:nth-child(4) a'}
        ,{sortByDescendingProductName: '[data-qa="search-sort-by"] li:nth-child(5) a'}
        ,{sortByPriceHighLow: '[data-qa="search-sort-by"] li:nth-child(3) a'}
        ,{sortByPriceLowHigh: '[data-qa="search-sort-by"] li:nth-child(2) a'}
        ,{brand1Element: 'input[name="Brand[]"]'}
        // */
    ],
    commands: [checkoutCommands]
};