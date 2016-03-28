'use strict';

let searchCommands = {
    submit: function(searchTerm) {
        return this.waitForElementPresent('@searchInput', 1000)
            .setValue('@searchInput', searchTerm)
            .click('@searchSubmit');
    },
    goToProduct: function (index) {
        index = index || 1;
        return this.click('[data-qa=search-results]:nth-of-type(' + index + ') [data-qa=search-product-title]');
    },
    variables: function() {
        return {
            oneKeywordTerm: "shirt",
            sortKeywordTerm: "sunglass"
        }
    }
};

module.exports = {
  url: '',
  elements: [
	{searchInput: 'input[data-qa=search-input]'}
    ,{searchSubmit: '[data-qa="search-button"]'}
	,{searchResultCount: '[data-qa=search-result-count]'}
    ,{searchProductName: '[data-qa=search-product-title]'}
	],
    commands: [searchCommands]
};