"use strict";
module.exports = {
  ///*
  'Marketing - Happy Path Scenario' : function (browser) {
	let home = browser.page.occHome();
	let scopeSelector = browser.page.occScopeSelector();
	let marketing = browser.page.occMarketing();

    //browser.deleteCookies();
    home.navigate()
		.waitForElementPresent('body', 1000)
        .login();
    
    //scopeSelector.select("BetterRetail USB"); // will fail
    //scopeSelector.select("BetterRetail USA"); // example 1, will succeed
    //scopeSelector.select(); // example 2, will also succeed
    scopeSelector.select("PizzaGo Canada");
    
    marketing.addCampaign();
    
    browser.pause(2000);
    
    browser.end();
  }
  
  
};