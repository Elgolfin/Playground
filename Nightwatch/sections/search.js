'use strict';

let searchCommands = {
    submit: function(searchTerm) {
        return this.waitForElementPresent('@searchInput', 1000)
            .setValue('@searchInput', searchTerm)
            .click('@searchSubmit');
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