"use strict"
module.exports = {
  ///*
  'Guest Checkout' : function (browser) {
	let checkout = browser.page.checkout();
	let search = browser.page.search();
	let minicart = browser.page.minicart();
	let product = browser.page.product();
    let cart = browser.page.cart();

    //browser.deleteCookies();
    checkout.navigate()
		.waitForElementPresent('body', 1000);
    
    browser.expect.element('[data-qa=minicart-count]').text.equal("");
    
    search.submit(search.variables().sortKeywordTerm)
        .goToProduct(1);
    
    // /*
    product.firstAddToCart()
        .waitForElementPresent('[data-qa=minicart-count]', 2000)
        .addToCart();
    // */
    
    browser.expect.element('[data-qa=minicart-count]').text.equal(2);
    
     /*
    let result = browser.getText('[data-qa=minicart-count]', function(result){
        browser.expect.element('[data-qa=minicart-count]').to.be.visible;
        let regex = new RegExp("^"+ result.value +"$");
        browser.expect.element('[data-qa=minicart-count]').text.matches(regex);
        browser.expect.element('[data-qa=minicart-count]').text.equal(result.value);
    });
    // */
    
    minicart.viewFullCart()
        .waitForElementPresent('.cart-item:nth-of-type(1) [data-qa=cart-product-price]', 1500);
    browser.expect.element('.cart-item:nth-of-type(1) [data-qa=cart-product-price]').text.equal('$135.00');
    browser.expect.element('.cart-item:nth-of-type(1) [data-qa=cart-product-subtotal-price]').text.equal('$270.00');
    
    cart.checkout();
    
    checkout.guest();
    checkout.nextStep();
    // Check error here because the form is not properly filled yet
    checkout.fillAddressInformation();
    browser.saveScreenshot('./screenshots/select-address.png');
    checkout.nextStep();
    checkout.selectShippingMethod(1);
    browser.saveScreenshot('./screenshots/select-shipping-method.png');
    checkout.nextStep();
    checkout.selectPaymentMethod(1);
    browser.saveScreenshot('./screenshots/select-payment-method.png');
    checkout.submitOrder();
    
    browser.pause(5000).saveScreenshot('./screenshots/order-confirmation.png');
    browser.waitForElementPresent('div[data-templateid="CheckoutOrderConfirmation"] p:nth-of-type(1) strong', 10000);
    browser.expect.element('div[data-templateid="CheckoutOrderConfirmation"] p:nth-of-type(1) strong').to.be.present;
    browser.expect.element('div[data-templateid="CheckoutOrderConfirmation"] p:nth-of-type(1) strong').text.matches(/[0-9]+/);
    
    
    
    browser.end();
  }
};