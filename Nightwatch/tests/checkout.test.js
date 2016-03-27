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
    
    browser.expect.element('[data-qa=minicart-count]').text.equal("");
    
    search.submit(search.variables().sortKeywordTerm)
        .click('@searchProductName');
    
    // /*
    product.firstAddToCart()
        .waitForElementPresent('[data-qa=minicart-count]', 2000)
        .addToCart();
    
    //
    // */
    
    browser.expect.element('[data-qa=minicart-count]').text.equal(2);
    
    let result = browser.getText('[data-qa=minicart-count]', function(result){
        console.log(result.value);
        browser.expect.element('[data-qa=minicart-count]').to.be.visible;
        let regex = new RegExp("^"+ result.value +"$");
        browser.expect.element('[data-qa=minicart-count]').text.matches(regex);
        browser.expect.element('[data-qa=minicart-count]').text.equal(result.value);
    });
    
    
    browser.end();
  }
};