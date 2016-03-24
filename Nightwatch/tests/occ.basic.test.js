"use strict"
let username1 =  'new1@orckestra.local';
let username2 =  'new2@orckestra.local';
let betterRetailUrl = 'https://composer-sitecore-cm-qa.orckestra.local/';


module.exports = {
  ///*
  'Better Retail Search' : function (browser) {
	let search = browser.page.search();
    search.navigate()
		.waitForElementVisible('body', 1000)
		.waitForElementVisible('@searchInput', 1000)
		.setValue('@searchInput', "shirt")
		.click('@searchSubmit')
		.assert.containsText('@searchResultCount', '3042');
    browser.end();
  }
  //*/
  ,'Demo test Orckestra Price Lists Login' : function (browser) {
    browser
      .url('https://sc-popcellar-oco-int2.overture.orckestra.local/cm/app/global/priceManagement/priceLists')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('div.ic-username', 1000)
      .setValue('input[name=username]', username1)
      .setValue('input[name=password]', 'hahaha123!')
	  .click('input[value=\'SIGN IN\']')
      .waitForElementPresent('[data-qa="username"]', 5000)
	  .assert.containsText('[data-qa="username"]', 'FIRSTNAME NAME')
      .end();
  }
  //*/
};



/*
	//browser
	  //.url(betterRetailUrl)
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[data-qa=search-input]', 1000)
      .setValue('input[data-qa=search-input]', "shirt")
	  .click('button[data-qa=search-button]')
      .pause(1000)
      .assert.containsText('strong[data-qa=search-result-count]', '3042')
*/