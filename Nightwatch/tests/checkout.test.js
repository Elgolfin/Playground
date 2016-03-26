"use strict"
module.exports = {
  ///*
  'Guest Checkout' : function (browser) {
	let checkout = browser.page.checkout();
	let search = browser.page.search();
	let miniCart = browser.page.minicart();
	let product = browser.page.product();

    //browser.deleteCookies();


    
    checkout.navigate()
		.waitForElementPresent('body', 1000);
    
    search.submit(search.variables().sortKeywordTerm)
        .click('@searchProductName');
    
    // /*
    product.firstAddToCart()
        .waitForElementPresent('[data-qa=minicart-count]', 2000)
        .assert.containsText('[data-qa=minicart-count]', 1)
        .addToCart()
        .assert.containsText('[data-qa=minicart-count]', 2);
    // */
    browser.end();
  }
};